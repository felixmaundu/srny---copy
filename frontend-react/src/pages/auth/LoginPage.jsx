import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'; // Material Design icons
import axios from "axios"
const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCreateAccountClick = () => {
    navigate('/RegisterPage'); // Navigate to register route
  };

  const [showPassword, setShowPassword] = useState(false);
 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [values, setValues] = useState({  
    email: '', 
    password: ''
  }); 

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) =>{ 
    e.preventDefault(); 
    axios.post('http://localhost:5000/auth/login', values)
    .then(res => {
      if(res.data.Status === "Success") { 
        navigate('/')
      }else { 
        alert (res.data.Message)
      }
      console.log(res)})
    .catch(err => console.log(err));
  }
  return (
    <div className="flex h-screen">
      {/* Left Side - App Name and Description */}
      <div className="w-1/2 flex flex-col justify-center items-center space-y-4 bg-gray-100 hidden md:flex">
        <Text className="text-3xl font-bold">Serenity</Text>
        <Text className="text-sm text-gray-500">Driver's hub...</Text>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full flex flex-col justify-center items-center px-10">  {/* Full width on small screens */}
        {/* Login to Serenity Text */}
        <Text className="text-xl font-bold mb-4">Login to Serenity</Text>

        {/* Login Form Card */}
        <form className="flex flex-col space-y-4 w-full bg-white shadow-md rounded-md p-4" onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email"  
          onChange = {e => setValues({...values, email:e.target.value})}/>
          <div className="relative flex items-center">
          <Input  placeholder="Password"  
           onChange = {e => setValues({...values, password:e.target.value})}
           type={showPassword ? 'text' : 'password'}
           />
           <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer focus:outline-none focus:ring focus:ring-blue-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <MdVisibilityOff className="h-5 w-5 text-gray-400" /> : <MdVisibility className="h-5 w-5 text-gray-400" />}
            </button>
            </div>
          <Button type="submit" className="py-2 px-4">Login</Button>
          <Text className="text-sm text-blue-500 hover:underline">Forgot Password?</Text>
          <Text
            className="text-sm text-blue-500 font-bold cursor-pointer hover:no-underline"
            onClick={handleCreateAccountClick} // Function to handle click
          >
            Don't have an account? Sign Up
          </Text>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
