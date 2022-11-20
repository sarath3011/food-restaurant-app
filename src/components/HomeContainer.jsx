import React from 'react'
import Delivery from'../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utiles/data'
const HomeContainer = () => {
  return (
<section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home">
<div className="py-2 flex-1 flex flex-col items-start 
md:items-start justify-center gap-6 ">{/**Left side container */}
    <div className="flex items-center gap-2 justify-center
     bg-orange-100 px-4 py-1 rounder-full">
<p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
   

<div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
<img src={Delivery} alt="delivery" className='w-full h-full object-contain' />
</div>
</div>
<p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide
 text-headingColor">The Fastest Delivery in {""}
 <span className='text-orange-600 md:text-[4.5rem] text-[3rem]'>Your City</span></p>

 <p className="text-base text-textColor text-center md:text-left md:tracking-tight md:w-80%">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio et dicta sit. 
 Illum quasi voluptas, nostrum perspiciatis, consequatur exercitationem autem 
 deserunt beatae amet, minima temporibus tenetur! Harum voluptatum nesciunt voluptates. </p>

 <button type="button" className="w-full bg-gradient-to-br from-orange-400 to-orange-500
  md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100" > Order Now</button>
</div>{/**Left side container */}

{/**Right side container */}
  <div className="py-2 md:my-10 flex items-center relative ">
    <img src={HeroBg} alt="herobg" className='ml-auto lg:h-650 h-420 w-full lg:w-auto '/>
 
  <div className="w-full h-full absolute top-0 left-0 
  flex items-center flex-col justify-center md:mt-10  md:py-20 -my-10 lg:py-6 gap-6 lg:px-32 lg:-ml-20 flex-wrap  ">
    {heroData && heroData.map((n)=>{
    return(
    <div key={n.id} className="p-4 lg:w-170  md:mt-5 bg-cardOverlay backdrop-blur-md rounded-3xl 
      flex flex-col items-center justify-center drop-shadow-lg ">
        <img src={n.imgSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-25" alt="images" />
        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
          {n.name}
        </p>
        <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-3">
          {n.descp}
        </p>
        <p className="text-sm font-semibold text-headingColor">
          <span className='text-xs text-red-600'>$</span>{n.price}
        </p>
      </div>)
    })}
    </div>
  </div> 
    </section>
  )
}

export default HomeContainer
