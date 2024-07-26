import React from 'react'

import Herosection from '../component/Herosection/Herosection';
import Service from '../Service/Service';
import Gallary from '../Gallary/Gallary';
import Popularpro from '../pages/ProdDetail/Popularpro';
import Slider from '../Gallary/Slider';


const Home = ({GetCart}) => {
  return (
    <>
     <Herosection/>
     <Service/>
     <Popularpro GetCart={GetCart}/>
     <Gallary/>
     <Slider/>
    </>
  );
}

export default Home;