import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className=''>

    <div className='flex justify-center items-center  mt-[100px] mb-[100px]'>
        <div>
        <div className='w-[300px] h-[200px] flex justify-center items-center rounded flex-col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzChvQ6zMMO6HMf9shw8Ow4SJTrugCdcj26Q&s" alt="" />
<h1 className='mb-0'>Your Cart Is Empty</h1>
</div>
<Link to="/Allproducts" >
<div className='flex justify-center items-center'>
<button className="bg-blue-900 text-white rounded m-auto px-5 py-1 hover:bg-blue-300 hover:text-black" >Back To Shoping</button>
</div>
</Link>
        </div>
    </div>
    </div>
  )
}

export default EmptyCart