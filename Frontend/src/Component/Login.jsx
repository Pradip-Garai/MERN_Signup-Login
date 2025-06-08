import React, { useState } from 'react'
import {ToastContainer} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/form.css';
import { handelError, handelSuccess } from '../Utils/Toastify';

function Login() {

  const [loginInfo,setloginInfo] = useState({
       email:'',
       password:''
  });

  const handelChange = (e)=>{
    const {name,value} = e.target;
    const copyloginInfo = {...loginInfo};
    copyloginInfo[name]=value;
    setloginInfo(copyloginInfo);
  }

  const navigate = useNavigate();

  const handelSubmit = async (e)=>{
    e.preventDefault();
     
    //client side validation 
    const {name,email,password} = loginInfo;
    if(!email || !password){
        return handelError('All fields are Required!!!');
    }

    try{

      const url = 'http://localhost:8000/auth/login';
      const response = await fetch(url,{
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },
         body: JSON.stringify(loginInfo)
      });

      const result = await response.json();

      const {success,message,jwtToken,name,error} = result;

      if(success){
         handelSuccess(message);
         localStorage.setItem('token',jwtToken);
         localStorage.setItem('logged_in_user', name);

         setTimeout(()=>{
             navigate('/home');
         },1800);
      }else if(error){
         const details = error?.details[0].message;
         handelError(details);
      }else if(!success){
         handelError(message);
      }


    }catch(error){
        handelError(error);
    }
  }

  return (
    <div className='container'>
        <h1>Login</h1>
        
        <form onSubmit={handelSubmit}>
            {/* Email Section */}
            <div>
                <label htmlFor='email'>Email</label>
                <input
                 onChange={handelChange}
                 type='email' 
                 name='email' 
                 placeholder='Enter Your Email'
                 value={loginInfo.email}
                />
            </div>

            {/* Password section */}
            <div>
                <label htmlFor='password'>Password</label>
                <input
                 onChange={handelChange}
                 type='password' 
                 name='password' 
                 placeholder='Enter Your Password'
                 value={loginInfo.password}
                />
            </div>
            <button className='btn2' type='submit'>Login</button>
            <span>Don't have any Account? <Link to="/signup">Signup</Link></span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Login