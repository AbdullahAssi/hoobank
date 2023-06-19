import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './button'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const CardDeal = () =>  (
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []),

    <section  className={layout.section}>
      <div data-aos = "fade-up" className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better Card <span className='text-gradient'>Deal</span>  <br  className='sm:block  hidden'/> in few easy steps.</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Want a Premium , Platinum or Any type of Card for more control on your money. We Got You covered in few steps.</p>
      <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className='w-[100%] h-[100%]'  />
      </div>
    </section>
  )

export default CardDeal