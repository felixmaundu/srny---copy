import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import axios from 'axios';

const HomePage = () => {
    const [auth, setAuth] = useState(false)
    const [name, setName] = useState('');
    const [message, setMessage] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name)
                } else {
                    setMessage(res.data.Message)
                }
            })
    })
    const navigate = useNavigate(); // Hook for navigation

    const handleCreateAccountClick = () => {
        navigate('/register'); // Navigate to register route
    };

    return (
        <div className="flex h-screen">
            {
                auth ?
                    <div>
                        <h3> welcome mungino {name}</h3>
                    </div>

                    :
                    <div>
                        <h3>{message}</h3>
                        <h3>
                            not your place
                        </h3>
                    </div >
            }
            <h1>Home page</h1>
        </div >
    );
};

export default HomePage;
