import React from 'react'
import styles from '../style'
import {arrowUp, discount, robot} from '../assets'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} bg-primary flex-col w-[100%] h-[100%] rounded-full `}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-23px'>
          <span className='text-gradient'>Get</span>
        </p>
          <img src={arrowUp} className='w-[23px] object-contain h-[23px]' alt="arrow" />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-23px'>
          <span className='text-gradient'>Started</span>
        </p>
    </div>
  </div>
);


const Hero = () =>  (
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []),

    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div  className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
            <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
            <p className={`${styles.paragraph} ml-2`}>
              <span className='text-white'>20% </span> Discount for {" "}
              <span className='text-white'>1 Month</span> Account
            </p>
        </div>

        <div data-aos="fade-up" className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss-leading[100px] leading-[75px]'>
              The Next <br className='sm:block hidden'/>
              <span className='text-gradient'>Generation</span> {" "}
              <br className='sm:block hidden'/>
            </h1>
            <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
            </div>
        </div>  

        <h1 data-aos="fade-up" className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss-leading[100px] leading-[75px] w-full'>Payment Method.
        </h1>
        <p data-aos="fade-up" className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our Team of Experts uses a methadology to identify the credit cards most likely to fit your needs. We examine annual percantage , fees, annual fees.
          </p>
      </div> 

      <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt=""  className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )

export default Hero


