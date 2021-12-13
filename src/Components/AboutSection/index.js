import React from 'react'
import { AboutSectionContainer, AboutImg, TextWrapper, AboutTitle, AboutDescription } from './AboutSectionElements';
import img from '../../image/mobile/image-interactive.jpg';

const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <AboutImg src={img}/>
            <TextWrapper>
                <AboutTitle>the leader in interactive vr</AboutTitle>
                <AboutDescription>
                    Founded in 2011, Loopstudios has been producing world-class virtual 
                    reality projects for some of the best companies around the globe. 
                    Our award-winning creations have transformed businessed through 
                    digit experiences that bind to their brand.
                </AboutDescription>
            </TextWrapper>
        </AboutSectionContainer>
    )
}

export default AboutSection;
