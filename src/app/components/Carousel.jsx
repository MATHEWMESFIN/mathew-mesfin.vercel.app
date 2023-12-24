'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Skills from './Skills';
import Hero from './Hero';
import Experience from './Experience';
import '../style/carousel.css';

const CARDS = 10;
const MAX_VISIBLE = 3;

const Card = ({ content }) => (
  <div className='card w-full h-full p-8 border rounded-2xl text-[#ffffff] text-justify bg-black'>
      {content}
  </div>
)

export const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div>
      {active >= 1 && (
        <button className='nav top' onClick={() => setActive((i) => i - 1)}>
          <FaChevronUp />
        </button>
      )}
      <div className='carousel relative lg:w-[70rem] h-[30rem] w-[40rem]'>
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
  return(
    <div className='app'>
    <Carousel>
      <Card
        content={<Hero />}
      />
      <Card
        content={<Skills />}
      />
      <Card
        content={<Experience />}
      />
      <Card
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
      />
      <Card
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
      />
      <Card
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
      />
      <Card
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
      />
      <Card
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
      />
    </Carousel>
  </div>
  )
};
