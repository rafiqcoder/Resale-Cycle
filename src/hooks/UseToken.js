import { useEffect,useState } from 'react';


const UseToken = (email) => {


    const [token,setToken] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem("token",data.accessToken);
                    setToken(data.accessToken);

                }
            });

    },[email,token]);

    return [token];
};

export default UseToken;