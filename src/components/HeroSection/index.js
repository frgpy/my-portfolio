import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
        <HeroContainer>
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>
            <HeroInnerContainer >
                <HeroLeftContainer id="Left">
                    <Title>Hi, I am <br /> {Bio.name}</Title>
                    <TextLoop>
                        I am a
                        <Span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Span>
                    </TextLoop>
                    <SubTitle>{Bio.description}</SubTitle>
                    <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                </HeroLeftContainer>

                <HeroRightContainer id="Right">
                    <img
                        src="/paprika.JPG"
                        alt="hero-image"
                        style={{
                            width: '100%',
                            maxWidth: '300px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            aspectRatio: '1/1',
                            boxShadow: '0 0 8px 2px #3f8efc, 0 0 0 2px #3f8efc',
                            border: '1.5px solid #3f8efc',
                        }}
                    />
                </HeroRightContainer>
            </HeroInnerContainer>

        </HeroContainer>
    </div>
    );
};



export default HeroSection;