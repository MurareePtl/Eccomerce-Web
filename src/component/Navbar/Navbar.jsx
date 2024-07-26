import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { ImCross } from "react-icons/im";

import toast from 'react-hot-toast';
import { auth } from '../../FireBase/Firebase';



const Navbar = ({cart,username} ) => {
  const[side,setside]=useState(false);
  const isChange=()=>{
    side===false?setside(true):setside(false)
  }
const handleLogOut=()=>{
  auth.signOut().then(()=>{
    toast.success("Logout Successfully")
  }).catch((error)=>{
    toast.error(error)
  })
}
  return (
    <>
    <div>
      <header className="bg-white border-b border-gray-200 top-0 z-10 w-full fixed">
        <div className="container mx-auto flex justify-between p-2 item-center">
          <div>
            <h3 className="font-bold text-2xl">
            <Link to="/">
            Patel<span className="text-red-600"> Shop</span>
            </Link>
            </h3>
          </div>
          {
            side?<div className="">
            <ul className="flex flex-col absolute top-[73px] w-[200px] right-0 z-10 bg-red-500 text-white items-center text-lg justify-center font-semibold h-[600px]">
                  <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer mt-[15px] mb-[15px]" onClick={isChange}>Home</li>
                  </Link>
                 {/* <Link to="Allproducts">
                 <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">All Producs</li>
                 </Link> */}
                 <Link to="/Allproducts">
                 <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]" onClick={isChange}>All Producs</li>
                 </Link>
                <Link  to="/About">
                <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]" onClick={isChange}>About</li>
                </Link>
                 <Link to="/Contact" >
                 <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]" onClick={isChange}>Contact</li>
                 </Link>
                </ul>
                
                <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-center text-black-600">
                <ImCross  className="" onClick={isChange}/>
      
                </button>
            </div>: ""
      
          }

       <div className="hidden md:block">
      <ul className="flex items-center text-lg justify-center font-semibold">
            <Link to="/">
            <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
            </Link>
            <Link to="/Allproducts">
                 <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">All Producs</li>
                 </Link>
                 <Link to="/About">
                <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">About</li>
                </Link>
                <Link to="/Contact" >
                 <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">Contact</li>
                 </Link>
          </ul>
      </div> 

{/* <div className="">
      <ul className="flex flex-col absolute top-[73px] w-[200px] right-0 z-10 bg-red-500 text-white items-center text-lg justify-center font-semibold h-[600px]">
            <Link to="/">
            <li className="mr-5 hover:text-gray-900 cursor-pointer mt-[15px] mb-[15px]">Home</li>
            </Link>
            <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">All Producs</li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">Mens</li>
            <li className="mr-5 hover:text-gray-900 cursor-pointer  mt-[15px] mb-[15px]">Kids</li>
          </ul>
          <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-center text-black-600">
          <ImCross  className=""/>

          </button>
      </div> */}
    

<div className="flex justify-center items-center gap-3">
  {
    username?<><Link to="/Login">
    <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline:none hover:bg-gray-200 rounded text-base font-semibold"  onClick={handleLogOut}>LogOut</button>
    </Link>
    <span>{username}</span></>:<Link to="/Login">
    <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline:none hover:bg-gray-200 rounded text-base font-semibold" >Login</button>
    </Link>
  }
 <Link to="/Cart">
 <button className='relative'>
 <span className="absolute top-[-5px] bg-[red] right-0 text-white px-1 rounded-full text-sx">{cart.length}</span>
 <FaShoppingCart size={30}/>
 </button>
 </Link>
{
  side?"": <button className=" md:hidden">
  <GiHamburgerMenu size={30}  onClick={isChange}/>
 
  </button>
}
</div>

        </div>
      </header>
    </div>
    </>
  );
}

export default Navbar;