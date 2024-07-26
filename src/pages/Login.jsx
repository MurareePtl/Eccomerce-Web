import React from 'react'

import { Link } from 'react-router-dom';
import { auth } from '../FireBase/Firebase'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';



const Login = () => {


  const navigateHome = useNavigate();
  const[UserSignUp,SetUserSignUp]=useState({Email:"",Password:""})

  const handleChange=(e)=>{
SetUserSignUp({...UserSignUp,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
e.preventDefault();
if(!UserSignUp.Email || !UserSignUp.Password){
  return toast.error("All Fill Are Required")
}else{
  signInWithEmailAndPassword(
    auth,UserSignUp.Email,UserSignUp.Password
  ).then(async(res)=>{
   navigateHome("/")
  })
  .catch((err)=>toast.error(err.message))
}
  }


  
  return (
    <>
<div >
    <div className='relative'>
<img src='https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.webp'  alt=''  className='object-cover w-full  h-[200px] ' />
<div className='w-full h-[200px] bg-black absolute top-[0px] left-[0px] opacity-[.3]'>
<h2 className="absolute top-[50%] left-[10%] text-white font-bold text-3xl  md:text-7xl"> Login</h2>
</div>
   

    <div>
      
    </div>
    
   
{/* login form */}
    <div className="container px-5 py-24 mx-auto flex ">
    <div className="mx-auto bg-red-500 rounded-lg flex flex-col md:ml-auto shadow-md  p-8 mt-8 md:mt-0">
      <h2 className="text-white text-4xl mb-1 font-medium title-font text-white ">Login</h2>
     
      
      <div className=" mb-4">
        <label for="email" className="leading-7 text-sm text-white">Email</label>
        <input type="email" 
         autoComplete='off'
        id="email" 
        name="Email" 
        value={UserSignUp.Email}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label for="password" className="leading-7 text-sm text-white">Password</label>
        <input type="password" 
         autoComplete='off'
         
        id="password" 
        name="Password" 
        value={UserSignUp.Password}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Login</button>
      <p className="text-xs text-white mt-3">Don`t you have an account?{" "}
        <Link to="/Signup">
        <button className="cursor-pointer text-blue-300" >Sign Up</button>
        </Link>
      </p>
    </div>

    </div>
   
    </div>

</div>

    </>
  )
}

export default Login;