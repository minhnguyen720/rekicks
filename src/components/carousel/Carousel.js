import React, { useState } from 'react';
import { CarouselData } from '../../assets/Dummy';
import { HeroSection, StyledImg, CheckOutBtn, CarouselContainer, VideoBg } from './Carousel.style';

import Carousel from "react-bootstrap/Carousel";
import { heroBg } from '../../assets/videos/Video';

export default function StyledCarousel() {
    const intervalValue = 5000;

    return (
        <CarouselContainer>
            <VideoBg autoPlay muted loop>
                <source src={heroBg} type="video/mp4" />
            </VideoBg>
            <HeroSection>
                <h1>Welcome to <span>REKICKS.</span></h1>
                <p>Where you make sneaker contact before eye contact</p>
                <CheckOutBtn>Discover now</CheckOutBtn>
            </HeroSection>
            <Carousel>
                {CarouselData.map((img) => {
                    return (
                        <Carousel.Item key={img.src} interval={intervalValue}>
                            <StyledImg
                                src={img.src}
                                alt=""
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </CarouselContainer>
    );
}