import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { auth } from '../FireBase/Firebase'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
  const navigate = useNavigate();
  const[UserSignUp,SetUserSignUp]=useState({Username:"",Email:"",Password:""})

  const handleChange=(e)=>{
SetUserSignUp({...UserSignUp,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
e.preventDefault();
if(!UserSignUp.Username || !UserSignUp.Email || !UserSignUp.Password){
  return toast.error("All Fill Are Required")
}else{
  createUserWithEmailAndPassword(
    auth,UserSignUp.Email,UserSignUp.Password
  ).then(async(res)=>{
    const user= res.user;
    await updateProfile(user,{
      displayName:UserSignUp.Username
    })
    navigate("/Login")
  })
  .catch((err)=>toast.error(err.message))
}
  }
  return (
    <>

<div className="container px-5 py-24 mx-auto flex ">
    <div className="mx-auto bg-red-500 rounded-lg flex flex-col md:ml-auto shadow-md  p-8 mt-8 md:mt-0">
      <h2 className="text-white text-4xl mb-1 font-medium title-font text-white ">Sign Up</h2>
     
      <div className=" mb-4">
        <label  className="leading-7 text-sm text-white">Full Name</label>
        <input type="text" 
        autoComplete='off'
        id="Username" 
        name="Username" 
        value={UserSignUp.Username}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>


      <div className=" mb-4">
        <label  className="leading-7 text-sm text-white">Email</label>
        <input type="email" 
         autoComplete='off'
        id="email" 
        name="Email" 
        value={UserSignUp.Email}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className=" mb-4"> 
        <label className="leading-7 text-sm text-white">Password</label>
        <input type="password" 
         autoComplete='off'
         
        id="password" 
        name="Password" 
        value={UserSignUp.Password}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Sign Up</button>
  
      
    </div>

    </div>
    <div>
    
    </div>
    </>
  );
}

export default Signup;