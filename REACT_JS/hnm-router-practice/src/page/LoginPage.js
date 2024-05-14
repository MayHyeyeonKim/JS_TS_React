import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = ({handleLogin}) => {
  const navigate = useNavigate();

  const handleLoginClick = () =>{
    console.log("Login button clicked");
    handleLogin();
    console.log("User is logged in");
    navigate('/');
    console.log("Navigating to home page");
  }
  return (
    <div className='login-container'>
        <h1>LoginPage</h1>
        <button onClick={handleLoginClick}> Login </button>
    </div>
  )
}

export default LoginPage