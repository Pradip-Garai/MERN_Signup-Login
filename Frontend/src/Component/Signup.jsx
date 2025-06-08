import React, { useState } from 'react'
import {ToastContainer} from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/form.css';
import { handelError, handelSuccess } from '../Utils/Toastify';

function Signup() {

  const [signupInfo,setSignupInfo] = useState({
       name:'',
       email:'',
       password:''
  });

  const handelChange = (e)=>{
    const {name,value} = e.target;
    const copySignupInfo = {...signupInfo};
    copySignupInfo[name]=value;
    setSignupInfo(copySignupInfo);
  }

  const navigate = useNavigate();

  const handelSubmit = async (e)=>{
    e.preventDefault();
     
    //client side validation 
    const {name,email,password} = signupInfo;
    if(!name || !email || !password){
        return handelError('All fields are Required!!!');
    }

    try{

      const url = 'http://localhost:8000/auth/signup';
      const response = await fetch(url,{
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },
         body: JSON.stringify(signupInfo)
      });

      const result = await response.json();

      const {success,message,error} = result;

      if(success){
         handelSuccess(message);
         setTimeout(()=>{
             navigate('/login');
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
        <h1>Signup</h1>
        
        <form onSubmit={handelSubmit}>
            {/* Name Section */}
            <div>
                <label htmlFor='name'>Name</label>
                <input
                 onChange={handelChange}
                 type='text' 
                 name='name' 
                 autoFocus 
                 placeholder='Enter Your Name'
                 value={signupInfo.name}

                />
            </div>

            {/* Email Section */}
            <div>
                <label htmlFor='email'>Email</label>
                <input
                 onChange={handelChange}
                 type='email' 
                 name='email' 
                 placeholder='Enter Your Email'
                 value={signupInfo.email}
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
                 value={signupInfo.password}
                />
            </div>
            <button className='btn2' type='submit'>Signup</button>
            <span>Already have an Account? <Link to="/login">Login</Link></span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Signup