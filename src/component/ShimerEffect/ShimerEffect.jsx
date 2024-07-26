import React from 'react'

const ShimerEffect = () => {
const arr = new Array(9).fill("");

  return (
    <div>

<section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
          <div className='flex gp-4  flex-wrap'>
        
{
  arr.map((item,id)=>(
     <div className='lg:w-1/4 md:w-1/2 p-4 w-full border-4 h-full rounded-md'>

<div className='w-full h-[200px] bg-[#ccc] rounded-md'></div>

 <div className="mt-4">
 <p className="text-gray-500 text-xs tracking-widest title-font mb-1 bg-gray-200 h-[20px] w-[120px]"></p>
 
  <p className="text-gray-900 text-lg font-medium title-font bg-gray-200 h-[20px] w-[40px]"> </p>
  <p className="mt-1 bg-gray-200 w-full h-[20px] w-[50px]"></p>
  <button className="bg-blue-900 text-white rounded m-auto px-5 py-1 hover:bg-blue-300 hover:text-black bg-gray-200 h-[20px] w-[70px]" ></button>
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

export default ShimerEffect