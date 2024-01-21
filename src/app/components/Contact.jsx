'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ContactSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 40rem;
    border-radius: 1rem;

    @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
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
            color: rgb(var(--primary-color));
        }
    }

    .description {
        font-size: 1rem;
        font-weight: 400;
        color: white;
        opacity: 0.75;
    }

    @media (max-width: 640px) {
        .header {
            font-size: 1.5rem;
        }

        .description {
            font-size: 0.75rem;
        }
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
        background-color: rgba(var(--primary-color), 0.2);
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
        background-color: rgb(var(--primary-color));
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all 0.3s ease-out;

        &:hover {
            background-color: rgb(var(--primary-color), 0.7);
        }

        &:disabled {
            background-color: rgba(var(--primary-color), 0.5);
            cursor: default;
        }
    }

    @media (max-width: 640px) {

        .email-subject-wrapper {
            flex-direction: column;
            gap: 0.5rem;
        }
        .contact-label {
            font-size: 0.75rem;
        }

        .contact-input {
            font-size: 0.75rem;
            padding: 0.5rem;
        }

        #message {
            height: 4rem;
        }

        .contact-submit {
            font-size: 0.75rem;
            padding: 0.5rem;
        }
    
    }
    
`

const ContactSuccess = styled.div`
    position: absolute;
    top: 6rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    .success-wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 1rem;
        background-color: rgba(0, 128, 0, 0.5);
        opacity: var(--opacity);
        transition: all 0.3s ease-out;

        .success-message {
            font-size: 1rem;
            font-weight: 600;
            color: white;
        }
    }

    @media (max-width: 1120px) {
        top: 5rem;
        right: 1.5rem;
        .success-wrapper {
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: 0.75rem;

            .success-message {
                font-size: 0.75rem;
            
            }
        }
    }

    @media (max-width: 880px) {
        top: 4rem;
        right: 1rem;
        .success-wrapper {
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 0.5rem;

            .success-message {
                font-size: 0.75rem;
            
            }
        }
    }
`

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sentEmail, setSentEmail] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, subject, message})
        });

        setEmail('');
        setSubject('');
        setMessage('');
        setSentEmail(true);
    }

  return (
    <ContactSection>
        <InfoWrapper>
            <h2 className='header'>
                Let's {" "}
                <span className='colored'>
                    connect
                </span>
            </h2>
            <p className='description'>
                If you would like to get in touch with me, please fill out the form and I will get back to you as soon as possible.
            </p>
        </InfoWrapper>

        <FormWrapper onSubmit={handleSubmit}>
            <div className='email-subject-wrapper'>
                <div className='email-wrapper'>
                    <label className='contact-label' htmlFor='email'>Your Email</label>
                    <input className='contact-input' 
                        id='email' 
                        type='email' 
                        required 
                        placeholder='example@email.com'
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className='subject-wrapper'>
                    <label className='contact-label' htmlFor='subject'>Subject</label>
                    <input className='contact-input' 
                        id='subject' 
                        type='subject' 
                        required 
                        placeholder='Hello there'
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}} />
                </div>
            </div>

            <label className='contact-label' htmlFor='message'>Message</label>
            <textarea 
                className='contact-input' 
                id='message' type='message' 
                required 
                placeholder="Let's talk about..."
                value={message}
                onChange={(e) => {setMessage(e.target.value)}} />

            <button className="contact-submit"
                type='submit'
                disabled={!email || !subject || !message}>
                    Send
            </button>
        </FormWrapper>

        <ContactSuccess>
            <div 
                className='success-wrapper'
                style={{
                    '--opacity': sentEmail ? '1' : '0',
                }}>
                <p className='success-message'>Email sent!</p>
                <button className='close-message'>
                    <FaXmark onClick={() => {setSentEmail(false)}} />
                </button>
            </div>
        </ContactSuccess>

    </ContactSection>
  )
}

export default Contact