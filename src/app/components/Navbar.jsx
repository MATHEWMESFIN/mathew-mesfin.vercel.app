'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { CiMenuBurger } from "react-icons/ci";
import { FiX, FiMenu } from "react-icons/fi";

const navLinks = [
    {
        to: '/',
        title: 'Home'
    },
    {
        to: '/about',
        title: 'About'
    },
    {
        to: '/projects',
        title: 'Projects'
    },
    {
        to: '/contact',
        title: 'Contact'
    }
]

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-6'>
            <Link href='/' className='text-5xl text-white font-semibold'>LOGO</Link>
            <div className='mobile-menu block md:hidden'>
                {!showMenu && (
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <FiMenu className='text-white text-3xl' />
                    </button>
                )}
                {showMenu && (
                    <div className=''>
                        <button onClick={() => setShowMenu(!showMenu)}>
                            <FiX className='text-white text-3xl' />
                        </button>
                        <ul className='absolute top-0 left-0 w-full h-screen my-24 bg-black bg-opacity-90 flex flex-col items-center justify-center text-xl text-white font-semibold'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={link.to}
                                        title={link.title} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex flex-wrap items-center justify-between text-xl text-white font-semibold'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink 
                                to={link.to}
                                title={link.title} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}
