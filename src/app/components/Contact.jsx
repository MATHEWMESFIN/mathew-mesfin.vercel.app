'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40rem;
    border-radius: 1rem;

    @media (max-width: 880px) {
        height: 45rem;
    }
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 5rem;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 800;
    color: rgba(var(--foreground-color));
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 10rem;
    gap: 1rem;
    background-color: rgb(var(--background-color), 0.5);
    border: 0.5px solid rgba(var(--foreground-color), 0.5);
    border-radius: 1rem;
    padding: 1rem;
    
    .header {
        font-size: 2rem;
        font-weight: 600;
        color: white;

        .colored {
            color: rgb(var(--primary-color));
        }
    }

    .description {
        font-size: 1.25rem;
        font-weight: 400;
        color: white;
    }

    @media (max-width: 880px) {
        .header {
            font-size: 1.5rem;
        }

        .description {
            font-size: 1rem;
        }
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
    width: 100%;
    height: 21rem;
    margin-top: 1rem;
    align-items: flex-start;
    background-color: rgb(var(--background-color), 0.5);
    border: 0.5px solid rgba(var(--foreground-color), 0.5);
    border-radius: 1rem;
    padding: 1rem;

    .email-subject-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        gap: 1rem;
        
        .email-wrapper, .subject-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
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
        width: 100%;
        height: 100%;
    }

    .contact-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
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

    @media (max-width: 880px) {
        height: 26rem;

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

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    font-size: 1rem;

    .colored {
        font-size: 1.5rem;
        color: rgb(var(--primary-color));
    }

    @media (max-width: 880px) {
        font-size: 0.75rem;
    
        .colored {
            font-size: 1rem;
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
        <TitleWrapper>
            Contact
        </TitleWrapper>

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

        <FooterWrapper>
            Made with
            <span className='colored'>
                {"\uFE0F \u2764 \uFE0F "}
            </span> 
            by Mathew Mesfin
        </FooterWrapper>

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