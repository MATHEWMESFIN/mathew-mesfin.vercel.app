'use client'
import React, { useState } from 'react'
import { FaHome, FaChartBar, FaBriefcase, FaUser } from "react-icons/fa";
import { BsChatSquareFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";


const navLinks = [
    {
        to: 0,
        title: 'Home',
        image: <FaHome />
    },
    {
        to: 1,
        title: 'Skills',
        image: <FaUser />
    },
    {
        to: 2,
        title: 'Experience',
        image: <FaBriefcase />
    },
    {
        to: 3,
        title: 'Projects',
        image: <FaChartBar />
    },
    {
        to: 4,
        title: 'Contact',
        image: <BsChatSquareFill />
    }
]

export const Navbar = ({active, setActive}) => {
    
    const MAX_VISIBLE = 3;

  return (
    <nav className='absolute hidden md:flex right-10 bottom-0 top-0 z-10 items-center justify-center'>
        <ul className='nav-main flex flex-col gap-5 items-center justify-center px-2 py-3 '>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <button 
                        onClick={() => setActive(link.to)}
                        style={{
                            '--active': link.to,
                            '--offset': Math.abs(active - index) / 3,
                            display: Math.abs(active - index) >= MAX_VISIBLE ? 'none' : 'block',
                            color: active === link.to ? 'rgb(139 92 246 / var(--tw-bg-opacity))' : 'white',
                        }}
                        className='nav-dots block text-white sm:text-xl rounded'>
                        {active === link.to ? link.image : <GoDotFill className=' text-xs'/>}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}
