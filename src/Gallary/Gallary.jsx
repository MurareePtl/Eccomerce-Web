import React from 'react'

const Gallary = () => {
  return (
    <div>
        <div className='mt-12 text-center'>
        <h1 className='text-4xl md:text-5xl font-semibold underline'>Gallery</h1>
      </div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-110 transition duration-500" src="https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-110 transition duration-500" src="https://media.istockphoto.com/id/1777876856/photo/digital-cart-icon-hologram-on-future-tech-background-online-shopping-evolution-futuristic.webp?b=1&s=170667a&w=0&k=20&c=5yltY4JJ1_3T__psr6xbT9QJ-ULwIYOkNTX49K7wPsQ="/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:scale-110 transition duration-500" src="https://media.istockphoto.com/id/1370737372/photo/young-woman-online-shopping-using-the-laptop-at-home.webp?b=1&s=170667a&w=0&k=20&c=o_NkVDVrxyj8l-umhjui_HWV_gnn8mIa51eHazMtEs0="/>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Gallary;