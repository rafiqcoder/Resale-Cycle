
import axios from 'axios';
import { createUserWithEmailAndPassword,getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile } from "firebase/auth";
import React,{ createContext,useEffect,useState } from 'react';
import { app } from '../Firebase/Firebase.config';


export const DataContext = createContext();
export const UserContext = createContext();

const Context = ({ children }) => {
    // Auth StatesE
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const [userEmail,setUserEmail] = useState('')
    const [userData,setUserData] = useState([]);
    const [currentUser,setCurrentUser] = useState([]);
    const auth = getAuth(app)

    const Provider = new GoogleAuthProvider();

    useEffect(() => {
        setCurrentUser(userData?.find((eachUser) => eachUser?.email === user?.email))
    },[userData,user])

    useEffect(() => {
        axios
            .get("https://usedcycle-server.vercel.app/allusers")
            .then((data) => setUserData(data.data))
            .catch((error) => {
            });
    },[setUserData]);

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



    const saveUserToDb = (name,email,img,userType) => {

        let verified;
        if (userType === 'seller') {
            verified = false;
        }

        const user = { name,email,img,userType,verified };
        fetch(`https://usedcycle-server.vercel.app/users`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setUserEmail(user?.email);
                }

            }).catch((err) => {
            });
    };

    // sharing user infor from db

    const dataInfo = { currentUser,setCurrentUser }

    const userInfo = {
        loginWithGoogle,
        logOut,loginWithEmail,updateNameAndPhoto,registerWithPassword,user,loading,setLoading,userEmail,saveUserToDb
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