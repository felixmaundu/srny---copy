import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'; // Material Design icons
import axios from "axios" // Assuming you're using axios for form submission

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        navigate('/LoginPage');
    };

    return (
        <div className="flex h-screen">
            {/* Left Side - App Name and Description (hidden on small screens) */}
            <div className="w-1/2 flex flex-col justify-center items-center space-y-4 bg-gray-100 hidden md:flex">
                <Text className="text-3xl font-bold">Serenity</Text>
                <Text className="text-sm text-gray-500">Your one-stop solution for...</Text>
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full flex flex-col justify-center items-center px-10">  {/* Full width on small screens */}
                {/* Title */}
                <Text className="text-xl font-bold mb-4">Create Your Account</Text>

                <form className="flex flex-col space-y-4 w-full bg-white shadow-md rounded-md p-4">
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type="email" placeholder="Email" />
                    <div className="relative flex items-center">  {/* Password field with visibility toggle */}
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer focus:outline-none focus:ring focus:ring-blue-500"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <MdVisibilityOff className="h-5 w-5 text-gray-400" /> : <MdVisibility className="h-5 w-5 text-gray-400" />}
                        </button>
                    </div>
                    <Input type="password" placeholder="Confirm Password" />
                    <Button type="submit" className="py-2 px-4">Register</Button>
                </form>

                {/* Already have an account text */}
                <Text className="text-sm text-blue-500 font-bold cursor-pointer hover:no-underline" onClick={handleLogin}>
                    Already have an account? Login
                </Text>


            </div>
        </div>
    );
};

export default RegisterPage;