'use client'
import React, { useState } from 'react';
import { App } from './components/Carousel';
import starData from './components/starData';

export default function Home() {

  return (
    <main className="min-h-screen w-screen flex items-center justify-center overflow-auto bg-black">
      <div className="star-t w-full flex fixed top-0 justify-around items-center select-none pointer-events-none">
        {starData.map((star, index) => (
          <div 
            key={index}
            style={{
              '--delay': (star.tag) + 's',
              '--size': (Math.floor(Math.random() * star.tag) + 5) + 'px',
            }}>
            <img src="/images/star.jpeg" className="w-[10px] rounded-full animate-pulse"/>
          </div>
        )
        )}
      </div>

      <div className="star-b w-full flex fixed bottom-0 justify-around items-center select-none pointer-events-none">
        {starData.map((star, index) => (
          <div 
            key={index}
            style={{
              '--delay': (star.tag) + 's',
              '--size': (Math.floor(Math.random() * star.tag) + 5) + 'px',
            }}>
            <img src="/images/star.jpeg" className="w-[10px] rounded-full animate-pulse"/>
          </div>
        )
        )}
      </div>

      <App />
    </main>
  )
}
