import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import experiences from './experienceData';
import styled from 'styled-components';

const ExperiencesSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`

const ExperiencesWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const TimelineSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 20rem;
    overflow: auto;
    gap: 3rem;
`

const FancyTimelineDot = styled(TimelineDot).attrs({
    variant: 'outlined',
})
`
    border: 2px solid white;
`

const ExperienceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50rem;
    border: 1px solid white;
    border-radius: 1rem;
    justify-content: space-between;
    overflow: hidden;
`

const ExperienceCardTop = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`

const ExperieneCardImg = styled.img.attrs(props => ({
    src: props.src,
}))
``

const ExperienceCardTopBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .role {
        font-size: 1.25rem;
        font-weight: 500;
    }

    .company {
        font-size: 1rem;
        font-weight: 400;
    }

    .duration {
        font-size: 0.75rem;
        font-weight: 400;
    }
`

const ExperienceCardDescription = styled.div`
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    display: none;

    ${ExperienceCardContainer}:hover & {
        display: block;
    }

    .skills {
        display: flex;
        width: 100%;
        gap: 1rem;
    }
`

const ExperienceCardSkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid white;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 400;
        padding: 0.5rem 1rem;
    }
`

const Experience = () => {
    return (
        <ExperiencesSection>
            <ExperiencesWrapper>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <FancyTimelineDot />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#8b5cf6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '20px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </ExperiencesWrapper>
        </ExperiencesSection>
    )
}

const ExperienceCard = ({ experience }) => {
    return (
        <ExperienceCardContainer>
            <ExperienceCardTop>
                <ExperieneCardImg src={experience.img} />
                <ExperienceCardTopBody>
                    <div className='role'>
                        {experience.role}
                    </div>
                    <div className='company'>
                        {experience.company}
                    </div>
                    <div className='duration'>
                        {experience.duration}
                    </div>
                </ExperienceCardTopBody>
            </ExperienceCardTop>
            <ExperienceCardDescription>
                {experience?.about &&
                    <span className='about'>
                        {experience?.about}
                    </span>

                }
                {experience?.skills &&
                    <div>
                        <br />
                        <div className='skills'>
                            <ExperienceCardSkillsWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <div key={index} className='skill'>
                                        {skill}
                                    </div>
                                ))}
                            </ExperienceCardSkillsWrapper>
                        </div>
                    </div>
                }
            </ExperienceCardDescription>
        </ExperienceCardContainer>
    )
}

export default Experience