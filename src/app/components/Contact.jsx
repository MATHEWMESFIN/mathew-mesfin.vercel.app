'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";



const ContactSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 100%;
    height: 100%;

`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .header {
        font-size: 2rem;
        font-weight: 600;
        color: white;

        .colored {
            color: rgb(139, 92, 246);
        }
    }

    .description {
        font-size: 1rem;
        font-weight: 400;
        color: white;
        opacity: 0.75;
    }

    .socials {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    .email-subject-wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        
        .email-wrapper, .subject-wrapper {
            display: flex;
            flex-direction: column;
        }
    }

    .contact-label {
        font-size: 1rem;
        font-weight: 500;
        color: white;
        margin-bottom: 0.5rem;
    }

    .contact-input {
        font-size: 1rem;
        font-weight: 400;
        color: white;
        background-color: rgba(139, 92, 246, 0.2);
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
    
    }

    #message {
        /* make it so that the user cannot alter the size of the text area */
        resize: none;
        height: 6rem;
    }

    .contact-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        background-color: rgba(139, 92, 246);
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.3s ease-out;

        &:hover {
            transform: scale(1.05);
            background-color: rgb(139, 92, 246, 0.7);
        }

        &:disabled {
            background-color: rgba(139, 92, 246, 0.5);
            cursor: default;
        }
    }
    
`

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {id, value} = e.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'subject') {
            setSubject(value);
        } else if (id === 'message') {
            setMessage(value);
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({email, subject, message})
        });
        console.log(res);
        setLoading(false);
    }

  return (
    <ContactSection>
        <InfoWrapper>
            <h2 className='header'>
                Lets {" "}
                <span className='colored'>
                    connect
                </span>
            </h2>
            <p className='description'>
                If you would like to get in touch with me, please fill out the form and I will get back to you as soon as possible.
            </p>
            <div className='socials'>
                <Link href='github.com'>
                    <FaGithub />
                </Link>
                <Link href='linkedin.com'>
                    <FaLinkedin />
                </Link>
            </div>
        </InfoWrapper>

        <FormWrapper>
            <div className='email-subject-wrapper'>
                <div className='email-wrapper'>
                    <label className='contact-label' htmlFor='email'>Your Email</label>
                    <input className='contact-input' 
                        id='email' 
                        type='email' 
                        required 
                        placeholder='example@email.com'
                        value={email}
                        onChange={handleChange}/>
                </div>
                <div className='subject-wrapper'>
                    <label className='contact-label' htmlFor='subject'>Subject</label>
                    <input className='contact-input' 
                        id='subject' 
                        type='subject' 
                        required 
                        placeholder='Hello there'
                        value={subject}
                        onChange={handleChange} />
                </div>
            </div>

            <label className='contact-label' htmlFor='message'>Message</label>
            <textarea 
                className='contact-input' 
                id='message' type='message' 
                required 
                placeholder='Lets talk about...'
                value={message}
                onChange={handleChange} />

            <button className='contact-submit' 
                type='submit'
                disabled={!email || !subject || !message}
                loading={loading}
                onClick={handleSubmit}>
                    {loading ? <AiOutlineLoading className=' animate-spin'/> : 'Send'}
            </button>
        </FormWrapper>

    </ContactSection>
  )
}

export default Contact