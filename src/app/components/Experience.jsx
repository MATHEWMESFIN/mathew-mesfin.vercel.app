'use client'
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const experiences = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "CourseStorm",
        location: "Remote",
        duration: "June 2023 - August 2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    },
    {
        id: 2,
        title: "Lab Admin",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    },
    {
        id: 3,
        title: "Student Researcher",
        company: "Towson University",
        location: "Towson, MD",
        duration: "August 2023 - Present",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
    }
]

const ExperienceCard = ({experience}) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='card-title'>{experience.title}</div>
                <div className='card-subtitle'>{experience.company}</div>
                <div className='card-subtitle'>{experience.location}</div>
                <div className='card-subtitle'>{experience.duration}</div>
            </div>
            <div className='card-body'>
                <div className='card-description'>{experience.description}</div>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div className='container' id="experience">
            <div className='wrapper'>
                <div className='title'>Experience</div>
                <div className='timeline-section'>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
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