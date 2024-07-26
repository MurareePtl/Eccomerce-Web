import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";




const Service = () => {
  return (
    <>
       <div className="container mx-auto px-5 flex py-11 gap-10 item-center justify-center flex-wrap">
        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500">
        <MdLocalShipping size={30}/>
        <p>FREE SHIPPING</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]  hover:scale-110 transition duration-500">
        <MdProductionQuantityLimits size={30}/>
        <p>AUTHENTIC PRODUCTS</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]  hover:scale-110 transition duration-500">
        <MdOutlineLocalShipping size={30}/>
        <p>EASY RETURN</p>
        </div>

        <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px]  hover:scale-110 transition duration-500">
        <MdOutlinePayment size={30}/>
        <p>SECURE PAYMENT</p>
        </div>

        
        </div> 
    </>
  );
}

export default Service;