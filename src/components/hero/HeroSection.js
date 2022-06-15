import React from 'react';
import { HeroSection, CheckOutBtn, HeroContainer, VideoBg } from './HeroSection.style';
import { heroBg } from '../../assets/videos/Video';

export default function StyledCarousel() {

    return (
        <HeroContainer>
            <VideoBg autoPlay muted loop>
                <source src={heroBg} type="video/mp4" />
            </VideoBg>
            <HeroSection>
                <h1>Welcome to <span>REKICKS.</span></h1>
                <p>Where you make sneaker contact before eye contact</p>
                <CheckOutBtn>Discover now</CheckOutBtn>
            </HeroSection>
        </HeroContainer>
    );
}