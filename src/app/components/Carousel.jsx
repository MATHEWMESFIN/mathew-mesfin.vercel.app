'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Skills from './Skills';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import '../style/carousel.css';
import { Navbar } from './Navbar';

const MAX_VISIBLE = 3;

const Card = ({ title, content }) => (
  <div className='card w-full h-full p-10 border rounded-2xl text-white text-justify bg-black'>
      {title !== '' && (
        <div className='title text-3xl text-center font-semibold mb-8 border-b-2 border-b-violet-500'>
          <span className='text-transparent bg-clip-text bg-gradient-to-t from-violet-500 via-violet-300 to-violet-100'>
            {title}
          </span>
        </div>
      )}
      {content}
  </div>
)

export const Carousel = ({ setActive, active, children }) => {
  
  const count = React.Children.count(children);

  return (
    <div>
      {active >= 1 && (
        <button className='nav top' onClick={() => setActive((i) => i - 1)}>
          <FaChevronUp />
        </button>
      )}
      {/* carousel relative lg:w-[70rem] md:w-[55rem] h-[30rem] w-[40rem] */}
      <div className='carousel relative h-[30rem] w-[40rem] md:w-[50rem] lg:w-[60rem]'>
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className='card-container absolute w-full h-full'
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointerEvents": active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBLE ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBLE ? 'none' : 'block',
            }}
            >
              {child}
          </div>
        ))}
      </div>
      {active < count - 1 && (
        <button className='nav bottom' onClick={() => setActive((i) => i + 1)}>
          <FaChevronDown />
        </button>
      )}
    </div>
  );
};

export const App = () => {
  const [active, setActive] = useState(0);
  return(
    <div className='app'>
      <Navbar active={active} setActive={setActive}/>
      <Carousel setActive={setActive} active={active}>
        <Card
          title=''
          content={<Hero />}
        />
        <Card
          title='Skills'
          content={<Skills />}
        />
        <Card
          title='Experience'
          content={<Experience />}
        />
        <Card
          title='Projects'
          content={<Projects />}
        />
        <Card
          title=''
          content={<div className='contact' />}
        />
      </Carousel>
    </div>
  )
};
