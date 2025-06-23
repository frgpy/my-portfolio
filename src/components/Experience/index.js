import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { Container, Wrapper, Title, Desc,TIme, TimelineSection } from './ExperienceStyledComponent';


const Experience = ({darkMode, setDarkMode}) => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                My background includes working on multiple ETHGlobal hackathon projects and developing my skills independently.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    <TimelineConnector style={{ background: '#854CE6' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} darkMode={darkMode} setDarkMode={setDarkMode}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience