'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className='flex w-full h-full justify-center items-center'>
        <div className='grid grid-cols-1 w-full h-full items-center justify-center lg:grid-cols-12'>
            <div className='col-span-7'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-violet-500'>
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
                <p className=' text-slate-300 text-lg lg:text-xl my-6'>
                    A man who finds happiness in solving problems and creating solutions.
                </p>
                <div className='buttons flex gap-5'>
                    <button className='bg-transparent px-10 py-3 rounded-full hover:bg-violet-500 hover:text-black transition text-white font-semibold border-solid border-violet-500 border mt-4'>
                        Contact
                    </button>
                    <button className='bg-transparent px-10 py-3 rounded-full hover:bg-slate-100 hover:text-black transition text-white font-semibold border-solid border-white border mt-4'>
                        Resume
                    </button>
                </div>
            </div>
            <div className='col-span-5 p-6'>
                <div className='hero-img relative rounded-full'>
                    <img
                        src='/images/laptop-space.png'
                        className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero