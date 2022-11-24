
import { useEffect,useState } from 'react';


const UseAdmin = (email) => {

    const [isAdmin,setIsAdmin] = useState(false)
    const [adminLoading,setAdminLoading] = useState(true)
    console.log(email);

    useEffect(() => {
        console.log('adminHook ');
        fetch(`http://localhost:5000/users/admin/${email}`,{

            headers: {
                authorization: `Barear ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message + ' admin 20');
                if (data.message === 'success') {
                    setIsAdmin(true)
                    setAdminLoading(false)
                } else {
                    setIsAdmin(false)
                    setAdminLoading(false)
                }
            })
            .catch((error) => {
                setAdminLoading(false)
                console.log(error);
            });
    },[email,setAdminLoading])



    return [isAdmin,adminLoading];
};

export default UseAdmin;