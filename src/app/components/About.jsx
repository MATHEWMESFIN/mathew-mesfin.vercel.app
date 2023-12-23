'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TabData = [
    {
        id: 'skills',
        title: 'Skills',
        content: (
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-2 md:col-span-1'>
                    <h3 className='text-2xl font-semibold mb-4'>Frontend</h3>
                    <ul className='text-base lg:text-lg'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <h3 className='text-2xl font-semibold mb-4'>Backend</h3>
                    <ul className='text-base lg:text-lg'>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'Education',
        title: 'Education',
        content: (
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-2 md:col-span-1'>
                    <h3 className='text-2xl font-semibold mb-4'>Backend</h3>
                    <ul className='text-base lg:text-lg'>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: 'Experience',
        title: 'Experience',
        content: (
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-2 md:col-span-1'>
                    <h3 className='text-2xl font-semibold mb-4'>Frontend</h3>
                    <ul className='text-base lg:text-lg'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        )
    }
]

export const About = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src='/images/about-image.jpeg' 
                alt='About' 
                width={500} 
                height={500}
                className='rounded-full' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full-stack web developer based in Landover, Maryland. 
                    I am passionate about building scalable and maintainable web applications.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                        active={tab === 'skills'}
                        selectTab={() => handleTabChange("skills")}
                        title='Skills' />
                    <TabButton 
                        active={tab === 'Education'}
                        selectTab={() => handleTabChange("Education")}
                        title='Education' />
                    <TabButton 
                        active={tab === 'Experience'}
                        selectTab={() => handleTabChange("Experience")}
                        title='Experience' />
                </div>
                <div className='mt-8'>
                        {TabData.find((tabData) => tabData.id === tab).content}
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-8 items-center'>
            <div className='mt-4 px-0.5 py-0.5 h-80 w-full items-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                <div className='grid grid-cols-12 px-6 py-3 h-full w-full bg-neutral-900 rounded-2xl font-mono overflow-auto'>
                    <div className='col-span-1 text-gray-500'>
                        1
                        <br />
                        2
                        <br />
                        3
                        <br />
                        4
                        <br />
                        5
                        <br />
                        6
                        <br />
                        7
                        <br />
                        8
                        <br />
                        9
                        <br />
                        10
                        <br />
                        11
                        <br />
                        12
                    </div>
                    <div className='col-span-11'>
                        <span className=' text-blue-400'>public static</span> <span className='text-emerald-400'>String</span><span className='text-fuchsia-400'>[]</span> <span className=' text-yellow-200'>skills</span><span className='text-fuchsia-400'>()</span> <span className='text-fuchsia-400'>{'{'}</span>
                        <div className='ml-4'>
                            <span className='text-emerald-400'>String</span><span className=' text-blue-500'>[]</span> <span className=' text-blue-300'>skills</span> = <span className=' text-blue-500'>{'{'}</span>
                            <div className='ml-4'>
                                <span className='text-[#c3927b]'>"HTML5"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"CSS3"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"JavaScript"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"React"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"Next.js"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"TailwindCSS"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"Bootstrap"</span>,
                            </div>
                            {'}'};
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 px-0.5 py-0.5 h-80 w-full items-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
                <div className='grid grid-cols-12 px-6 py-3 h-full w-full bg-neutral-900 rounded-2xl font-mono overflow-auto'>
                    <div className='col-span-1 text-gray-500'>
                        1
                        <br />
                        2
                        <br />
                        3
                        <br />
                        4
                        <br />
                        5
                        <br />
                        6
                        <br />
                        7
                        <br />
                        8
                        <br />
                        9
                        <br />
                        10
                        <br />
                        11
                        <br />
                        12
                    </div>
                    <div className='col-span-11'>
                        <span className='text-blue-400'>public static</span> <span className='text-emerald-400'>String</span><span className='text-fuchsia-400'>[]</span> <span className='text-yellow-200'>skills</span><span className='text-fuchsia-400'>()</span> <span className='text-fuchsia-400'>{'{'}</span>
                        <div className='ml-4'>
                            <span className='text-emerald-400'>String</span><span className='text-blue-500'>[]</span> <span className='text-blue-300'>skills</span> = <span className='text-blue-500'>{'{'}</span>
                            <div className='ml-4'>
                                <span className='text-[#c3927b]'>"HTML5"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"CSS3"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"JavaScript"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"React"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"Next.js"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"TailwindCSS"</span>,
                                <br />
                                <span className='text-[#c3927b]'>"Bootstrap"</span>,
                            </div>
                            {'}'};
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
