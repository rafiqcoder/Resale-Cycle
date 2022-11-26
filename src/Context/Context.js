
import { createUserWithEmailAndPassword,getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile } from "firebase/auth";
import React,{ createContext,useEffect,useState } from 'react';
import toast from "react-hot-toast";
import { app } from '../Firebase/Firebase.config';
import axios from 'axios';


export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    // Auth StatesE
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const [userEmail,setUserEmail] = useState('')
    const [userData,setUserData] = useState([]);
    const [currentUser,setCurrentUser] = useState(
        userData?.find((eachUser) => eachUser.email === user?.email)
    );
  
    const auth = getAuth(app)

    const Provider = new GoogleAuthProvider();


    // console.log(userData);

    useEffect(() => {
        axios
            .get("http://localhost:5000/allusers")
            .then((data) => setUserData(data.data))
            .catch((error) => {
                // handle error
                console.log(error);
            });
    },[]);

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,Provider)
    }
    const registerWithPassword = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    };
    const updateNameAndPhoto = (name,photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    // console.log(user);
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[auth])

    // console.log(userData);
   


    const saveUserToDb = (name,email,img,userType) => {
        let verified;
        if (userType === 'seller') {
            verified = false;
        }

        const user = { name,email,img,userType,verified };

        fetch(`http://localhost:5000/users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // getUserToken(user.email);
                    setUserEmail(user.email);
                    toast.success("User added successfully");
                }

            }).catch((err) => {
                console.log(err);
            });
    };


    const dataInfo = { currentUser,setCurrentUser }

    const userInfo = {
        loginWithGoogle,
        logOut,loginWithEmail,updateNameAndPhoto,registerWithPassword,user,loader: loading,loading,setLoading,userEmail,saveUserToDb
    }
    return (
        <UserContext.Provider value={userInfo}>
            <DataContext.Provider value={dataInfo}>
                {children}
            </DataContext.Provider>
        </UserContext.Provider>
    );
};

export default Context;