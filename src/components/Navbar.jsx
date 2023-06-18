import React from 'react'
import {close, logo ,menu } from '../assets'
import { useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='w-full py-6 flex justify-between items-center navbar'>
            <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
            
            <ul className=' list-none sm:flex hidden justify-end items-center flex-1'>

            {navLinks.map((nav,index)=>(
                <li key={nav.id} 
                    className={`font-poppins list-none
                    font-normal cursor-pointer text-[16px] text-white  ${index ===navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}} navbar-hover`} >
                            {nav.title}
                        </a>
                </li>
            ))}
            </ul>

            <div className= "sm:hidden flex flex-1 justify-end items-center">
                <img src={showMenu ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setShowMenu((prevState) => !prevState)}
                />

                <div 
                    className={`${showMenu ? 'flex'
                    : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className=' list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav,index)=>(
                            <li key={nav.id} 
                                className={`font-poppins list-none
                                font-normal cursor-pointer text-[16px] text-white  ${index ===navLinks.length-1 ? 'mr-0' : 'mb-4'}`}>
                                    <a href={`#${nav.id}} navbar-hover`}>
                                        {nav.title}
                                    </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar