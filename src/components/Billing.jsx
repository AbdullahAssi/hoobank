import React from 'react'
import {apple ,bill, google} from '../assets'
import styles, {layout} from '../style'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Billing = () => 
    (
      useEffect(() => {
        AOS.init({
          duration: 2500,
        });
      }, []),

      <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]  ' srcset="" />
          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounder-full white__gradient' />
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounder-full pink__gradient' />
        </div>

        <div data-aos="fade-up" className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily Control Your<br className='sm:block hidden'/> Billing & inovoicing</h2>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            We provide flexibality and control on your transaction with safe and secure methods.Your Trust and safety of your money is over priority.
          </p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="apple logo" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5'/>
            <img src={google} alt="google play" className='w-[128px] h-[42px] object-contain cursor-pointer '/>
          </div>
        </div>
      </section>
    )

export default Billing