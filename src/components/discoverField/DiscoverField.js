import React from 'react'
import { DiscoverFieldContainer, StyledCarouselInner } from './DiscoverField.style';

import { CarouselData } from '../../assets/Dummy';
import { StyledImg} from '../hero/HeroSection.style';

export default function DiscoverField() {
    const intervalValue = 3000;

    return (
        <DiscoverFieldContainer>
            <StyledCarouselInner fade>
                {CarouselData.map((img) => {
                    return (
                        <StyledCarouselInner.Item key={img.src} interval={intervalValue}>
                            <StyledImg
                                src={img.src}
                                alt=""
                            />
                        </StyledCarouselInner.Item>
                    );
                })}
            </StyledCarouselInner>

            <div className="sideField">
                <h1>leo in vitae turpis massa</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.</p>
                <button>Discover now</button>
            </div>

        </DiscoverFieldContainer>
    );
}