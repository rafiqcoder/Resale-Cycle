
import { useEffect,useState } from 'react';


const UseAdmin = (email) => {

    const [isAdmin,setIsAdmin] = useState(false)
    const [adminLoading,setAdminLoading] = useState(true)

    useEffect(() => {
        fetch(`https://usedcycle-server.vercel.app/admin/${email}`,{

            headers: {
                authorization: `Barear ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
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
            });
    },[email,setAdminLoading])



    return [isAdmin,adminLoading];
};

export default UseAdmin;