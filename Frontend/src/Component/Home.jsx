import React, { useEffect, useState } from 'react';
import './Styles/home.css'
import { useNavigate } from 'react-router-dom';
import { handelSuccess } from '../Utils/Toastify';
import { ToastContainer } from 'react-toastify';

function Home() {
  const [loggedIn, setLoggedIn] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('logged_in_user');
    console.log("Logged in user:", user); // debug
    setLoggedIn(user);
  }, []);

  const handelLogout = (e)=>{
       localStorage.removeItem('token');
       localStorage.removeItem('logged_in_user');
        handelSuccess("Logout Successfull !!!");
       setTimeout(()=>{
           navigate('/login');
       },1500)
  }

  return (
    <div>
      <h1 className='h1'>{loggedIn ? `Welcome!!! ${loggedIn}` : 'User not found'}</h1>
      <button className='btn' onClick={handelLogout}>Logout</button>
      <ToastContainer />
    </div>
  );
}

export default Home;
