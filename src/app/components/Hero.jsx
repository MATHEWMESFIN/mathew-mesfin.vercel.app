'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                        Mathew {" "}
                    </span>
                    Mesfin
                </h1>
                <h2 className='text-white text-2xl lg:text-4xl font-bold mb-4'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Software Engineer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            'Problem Solver',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                </h2>
                <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div>
                    <button className='hover:bg-slate-50 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mt-4 mr-4 transition text-white'>
                        <span className='block bg-black bg-opacity-0 hover:bg-opacity-30 rounded-full px-6 py-3'>
                            Contact Me
                        </span>
                    </button>
                    <button className='bg-transparent px-6 py-3 rounded-full hover:bg-slate-100 hover:text-black transition text-white border-solid border-white border mt-4'>
                        Resume
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-5 lg:mt-0 lg:ml-5'>
                <div className='relative rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]'>
                    <Image 
                        src='/images/laptop-space.png' 
                        alt='hero' 
                        width={500} 
                        height={500}
                        className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero