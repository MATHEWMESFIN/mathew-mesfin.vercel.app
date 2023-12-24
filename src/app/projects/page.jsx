'use client'
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Carousel } from '../components/Carousel';
import { App } from '../components/Carousel';

export default function page() {
    const panels = [
        {
            title: "Panel 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
            color: "bg-red-500"
        },
        {
            title: "Panel 2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
            color: "bg-green-500"
        },
        {
            title: "Panel 3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
            color: "bg-blue-500"
        },
        {
            title: "Panel 4",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
            color: "bg-yellow-500"
        },
        {
            title: "Panel 5",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.",
            color: "bg-purple-500"
        }
    ]

  return (
    <main className="min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <App />
    </main>
  )
}