import React from 'react'
import { AirForceOne } from '../../assets/imgs/Image';
import { CheckOutBtn } from '../carousel/Carousel.style';
import { DiscoverFieldContainer } from './DiscoverField.style';

export default function DiscoverField() {
    return(
        <DiscoverFieldContainer>
            <img src={AirForceOne} alt='' />
            <div>
                <h1>leo in vitae turpis massa</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.</p>
                <CheckOutBtn>Discover now</CheckOutBtn>
            </div>
        </DiscoverFieldContainer>
    );
}