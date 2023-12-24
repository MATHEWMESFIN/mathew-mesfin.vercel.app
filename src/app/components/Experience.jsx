import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Image from 'next/image';
import '../style/experience.css';

const experiences = [
    {
        id: 1,
        role: "Software Engineer Intern",
        company: "CourseStorm",
        location: "Remote",
        duration: "June 2023 - August 2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    },
    {
        id: 2,
        role: "Lab Admin",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    },
    {
        id: 3,
        role: "Student Researcher",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    }
]

const ExperienceCard = ({ experience }) => {
    return (
        <div className='experience-card flex flex-col relative lg:w-[50rem] w-[20rem] border rounded-xl shadow-lg px-4 py-3 gap-3 justify-between overflow-hidden'>
            <div className='top'>
                <Image src={experience.img} />
                <div className='top-body'>
                    <div className='role'>
                        {experience.role}
                    </div>
                    <div className='company'>
                        {experience.company}
                    </div>
                    <div className='duration'>
                        {experience.duration}
                    </div>
                </div>
            </div>
            <div className='description'>
                {experience?.description &&
                    <span className='desc-content'>
                        {experience?.description}
                    </span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <div className='skills'>
                            <b>Skills:</b>
                            <div className='item-wrapper'>
                                {experience?.skills?.map((skill, index) => (
                                    <div className='skill'>
                                        • {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div className='container flex flex-col justify-center relative w-full z-[1] items-center px-5' id="experience">
            <div className='wrapper flex flex-col relative justify-between items-center w-full px-5 gap-12'>
                <div className='title text-3xl text-center font-semibold mt-5'>
                    Experience
                </div>
                <div className='timeline-section flex flex-col items-center w-full h-80 mt-3 gap-12 overflow-auto'>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator className='w-full'>
                                    <TimelineDot variant="filled" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </div>
            </div>
        </div>
    )
}

export default Experience