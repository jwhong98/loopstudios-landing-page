import React from 'react'
import { HeroSectionContainer, HeroImg, TextWrapper, Text } from './HeroSection';
import img from '../../image/mobile/image-hero.jpg';

const HeroSection = () => {
    return (
        <HeroSectionContainer>
            <HeroImg src={img}/>
            <TextWrapper>
                <Text>immersive experiences that deliver</Text>
            </TextWrapper>
        </HeroSectionContainer>
    )
}

export default HeroSection;
