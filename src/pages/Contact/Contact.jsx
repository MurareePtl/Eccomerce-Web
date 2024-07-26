import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { db } from '../../FireBase/Firebase'

const Contact = () => {
    const[contact,setcontact]=useState({Username:"",Email:"",Massage:""})

    const handleContact=(e)=>{
      setcontact({...contact,[e.target.name]:e.target.value})
        
          }
        
          const handleSubmit=(e)=>{
        e.preventDefault();
        if(!contact.Username ||!contact.Email || !contact.Massage){
          return toast.error("All Fill Are Required")
        }else{
        addDoc(collection(db,"contactUser"),{
          user:contact.Username,
          email:contact.Email,
          msg:contact.Massage
        }).then(()=>{
          toast.success("Form Submit Successfuly")
          setcontact({Username:"",Email:"",Massage:""})
        }).catch((err)=>toast.error(err.Massage))
        }
          }
        
 
  return (
    <>
    <div className="container px-5 py-24 mx-auto flex ">
    <div className="mx-auto bg-red-500 rounded-lg flex flex-col md:ml-auto shadow-md  p-8 mt-8 md:mt-0">
      <h2 className="text-white text-4xl mb-1 font-medium title-font text-white ">Contact Us</h2>
     
      <div className=" mb-4">
        <label  className="leading-7 text-sm text-white">Full Name</label>
        <input type="text" 
        autoComplete='off'
        id="Username" 
        name="Username" 
        value={contact.Username}
        onChange={handleContact}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>


      <div className=" mb-4">
        <label  className="leading-7 text-sm text-white">Email</label>
        <input type="email" 
         autoComplete='off'
        id="email" 
        name="Email" 
        value={contact.Email}
        onChange={handleContact}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className=" mb-4"> 
        <label className="leading-7 text-sm text-white">Massage</label>
        <textarea type="text" 
         autoComplete='off'
         
        id="Massage" 
        name="Massage" 
        value={contact.Massage}
        onChange={handleContact}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
     
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Submit</button>
  
      
    </div>

    </div>
    </>
  );
}

export default Contact;