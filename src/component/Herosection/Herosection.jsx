import React from 'react'

const Herosection = () => {
  return (
    <div class="relative">
           <div>
            <img src="https://citywestshoppingcentre.com/app/uploads/2017/04/Woman-Shopping-Banner.jpg"
            alt=''
            class="w-full object-cover object-center"
            />
        </div>
        <div class="absolute top-[30%] left-[50%]">
            <h1 class="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-[red]">
                Discover Your Next Advanture!</h1>
            <p class="text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold text-center">Shop Our Latest Arrival & Unsplash Your Style</p>
        </div>
    </div>
  );
}

export default Herosection;