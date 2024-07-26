import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Popularpro = ({GetCart}) => {
  const[poppro,setpoppro]=useState([])

  useEffect(()=>{
 const Popular=async()=>{
  try{
    const res = await axios("https://dummyjson.com/carts/1")
  
   
    setpoppro(res?.data?.products)
    console.log(poppro)
  }catch(err){
    console.log(err)
  }
 }
 Popular();

  },[])
  return (
    <div>
      <div className='mt-12 text-center'>
        <h1 className='text-4xl md:text-5xl font-semibold underline'>Popular Porducts</h1>
      </div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {
        poppro.map((item)=>(
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail}/>
        </a>
        <div className="mt-4"> 
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.title}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">Price:{item.price}</p>
          <button className="bg-blue-900 text-white rounded m-auto px-5 py-1 hover:bg-blue-300 hover:text-black"  onClick={()=>GetCart(item)}>Add To Cart</button>
        </div>
      </div>
        ))
      }
      
      
     
    </div>
  </div>
</section>
    </div>
  )
}

export default Popularpro