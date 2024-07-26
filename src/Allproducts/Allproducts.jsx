import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import ShimerEffect from '../component/ShimerEffect/ShimerEffect';

const Allproducts = ({GetCart}) => {
  //'https://dummyjson.com/products/category-list'
  const[allprod,setallprod]=useState([])  
  // 'https://dummyjson.com/products'
  const[prod,setprod]=useState([])
  const[originalpro,setoriginalpro]=useState([])

  const[selectprod,setselectprod]=useState("")
  //for serach 
  const[Searchitem ,setSearchitem]=useState("");
  //for max min
  const[min,setmin]=useState("")
  const[max,setmax]=useState("")
 
 //Allprodcts 
useEffect(()=>{
const Allprod=async()=>{
  const res = await axios('https://dummyjson.com/products')
  setallprod(res.data.products);
  setoriginalpro(res.data.products);


}
Allprod();
},[])




  useEffect(()=>{
const getallproductscategery= async()=>{
  
 try{
  const res = await axios("https://dummyjson.com/products/category-list");
  setprod(res.data);
 }catch(error){
  console.log(error)
 }
};

getallproductscategery();
  },[]);
  //'https://dummyjson.com/products/category/smartphones'







   //get the product categery   
      const filterProduct=(procategery)=>{
        setselectprod(procategery)
        const data = procategery?originalpro.filter((filteritem)=>filteritem.category===procategery):originalpro;

        setallprod(data);
      }

      //sertch item through input box
   


      const handleserchclick=()=>{
        const searchProduct = originalpro.filter((filteritem)=>filteritem.title.includes(Searchitem))
        setallprod(searchProduct);
      }

      //search throgh min and max
    const handleminmax=()=>{
      const minval = parseFloat(min);
      const maxval = parseFloat(max);
      const filterval = originalpro.filter((filteritem)=>(
        (filteritem.price>=minval) && (filteritem.price<=maxval)
      ))
      setallprod(filterval)
    }

  return (
    <>
    <>
          <div className='relative'>
<img src='https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.webp'  alt=''  className='object-cover w-full  h-[200px] ' />
<div className='w-full h-[200px] bg-black absolute top-[0px] left-[0px] opacity-[.3]'>
<h2 className="absolute top-[50%] left-[10%] text-white font-bold text-3xl  md:text-7xl">Our Products</h2>
</div>
</div>
{/* //category section */}
        <div className='flex gap-3 flex-wrap mt-3 '>
          <select  onChange={(e)=>filterProduct(e.target.value)} className="mx-auto border-solid border-2 border-indigo-600">
            <option >Filter Your Product</option>
     {
      prod.filter(filteritem=>!["motorcycle","furniture","vehicle"].includes(filteritem)).map((item,i)=>(
        
          
        <option value={item}>{item}</option>
      
      ))
     }
     </select>
          {/* <button className='border bg-black text-white'>{prod}</button> */}
        </div>

        <div className='text-center mt-3 text-2xl'>
          <input type="text" placeholder='Serch Your Product' className='border-4 px-2 py-2' onChange={(e)=>setSearchitem(e.target.value)} value={Searchitem}/>
          <button  className='border-4 px-1 py-1 rounded-xl bg-blue-900 text-white  hover:bg-blue-300 hover:text-black' onClick={handleserchclick}>Serch Product</button>
        </div>
        <div className='text-center mt-3 text-2xl'>
          <input type="text" placeholder='Min' className='border-4 px-1 py-1 w-[100px] m1' onChange={(e)=>setmin(e.target.value)} value={min}/>
           <input type="text" placeholder='Max' className='border-4 px- py-1 w-[100px] m-1' onChange={(e)=>setmax(e.target.value)} value={max}/>
          <button  className='border-4 px-1 py-1 rounded-xl bg-blue-900 text-white  hover:bg-blue-300 hover:text-black' onClick={handleminmax}>Serch Product</button>
        </div>


{
  !allprod.length?(<ShimerEffect/>):         <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto ">
      <div className='flex gp-5 mb-3  flex-wrap'>
    {
allprod.map((allitem)=>(
<div className='lg:w-1/4 md:w-1/2 p-4 w-full border-4 rounded-xl' key={allitem.id}>
<Link className="block relative h-48 rounded overflow-hidden" to={`/ProdDetail/${allitem.id}`}>
<img src={allitem.thumbnail} alt=""  className="object-cover boject-center w-full h-full block"/>
</Link>
<div className="mt-4">
<p className="text-gray-500 text-xs tracking-widest title-font mb-1">Title:{allitem.title}</p>

<p className="text-gray-900 text-lg font-medium title-font "> Rating:{allitem.rating}</p>
<p className="mt-1">Price:{allitem.price}</p>
<button className="bg-blue-900 text-white rounded m-auto px-5 py-1 hover:bg-blue-300 hover:text-black"  onClick={()=>GetCart(allitem)}>Add</button>
</div>
</div>
))

    }
    </div>
  </div>
  </section>
}
        
      {/* all products section */}

      
 


      

        </>
        </>
  );
}

export default Allproducts;