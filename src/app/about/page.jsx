'use client'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { Navbar } from '../components/Navbar';

//book data
var bookData = [
    {
        id: 1,
        flipped: false,
        zIndex: 'z-50',
        front: {
            title: 'Little Dog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
        },
        back: {
            title: 'Some Intro',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
        }
    },
    {
        id: 2,
        flipped: false,
        zIndex: 'z-40',
        front: {
            title: 'Some Cool Page',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
        },
        back: {
            title: 'An Awesome Page',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
        }
    },
    {
        id: 3,
        flipped: false,
        zIndex: 'z-30',
        front: {
            title: 'An Amazing Page',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
        },
        back: {
            title: 'The Good Bye',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.'
        }
    }
]

export default function page()  {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        if(page === 1) {
            openBook();
            setPage(page + 1);
        } else if(page === bookData.length) {
            closeBook(false);
            setPage(page + 1);
        } else {
            setPage(page + 1);
        }

    }

    const prevPage = () => {
        if(page === bookData.length) {
            closeBook(true);
            setPage(page - 1);
        } else if(page === 1) {
            openBook();
            setPage(page - 1);
        } else {
            setPage(page - 1);
        }
    }

    const openBook = () => {

    }

    const closeBook = () => {

    }

  return (
    <main className='bg-black'>
        <Navbar />
        <div className='min-h-screen flex items-center justify-center'>
            <button
                onClick={prevPage}
                className='prev-button bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mr-auto'>
                <span className='block bg-black bg-opacity-0 hover:bg-opacity-30 rounded-full p-2'>
                    <FaArrowLeft className='text-4xl text-white rounded-full'/>
                </span>
            </button>

            <div id="book" className="book w-[350px] h-[500px] relative">
                {bookData.map((book) => (
                    <div key={book.id} className={page > book.id ? 'paper flipped' : `paper ${book.zIndex}`}>
                        <div className="front">
                            <div className="front-content">
                                <h1 className="book-title">{book.front.title}</h1>
                            </div>
                        </div>
                        <div className="back">
                            <div className="back-content">
                                <h2>{book.back.title}</h2>
                                <div className="content">
                                    <p>{book.back.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={nextPage}
                className='next-button bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full ml-auto'>
                <span className='block bg-black bg-opacity-0 hover:bg-opacity-30 rounded-full p-2'>
                    <FaArrowRight className='text-4xl text-white rounded-full'/>
                </span>
            </button>
        </div>
        
    </main>
  )
}
