import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
    gsap.to('#description', { opacity: 1, y: -20, delay: 1.5 });
  }, []);

  return (
    <section className='w-full nav-height bg-black'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p 
          id="hero" 
          className='hero-title text-9xl md:text-9xl font-bold w-full text-center px-4'
        >
          Samarth 
        </p>
        <p 
          id="description" 
          className='text-center  mt-28 md:text-lg text-sm max-w-2xl opacity-0 translate-y-20 px-4'
        >
          Join the nation’s defense initiative by becoming a part of the esteemed DRDO. Samarth is your gateway to an illustrious career in defense research and development.
        </p>
      </div>
      <div 
        id='cta' 
        className='flex flex-col items-center opacity-0 translate-y-28'
      >
        <a href="#apply" className='btn'>Apply Now</a>
        <p className='font-normal text-xl'>Shape the Future of National Security</p>
      </div>
    </section>
  );
};

export default Hero;
