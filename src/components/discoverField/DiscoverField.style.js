import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel";

export const StyledCarouselInner = styled(Carousel) `
    max-width: 100vmin;
    width: 100%;

    text-align: center;
`

export const DiscoverFieldContainer = styled.div`
    background-color: #000000;
    display: flex;

    .sideField {
        padding: 3% 5% 5%;
    }

    h1 {
        color: #ffffff;
        font-size: 5vmin;
        text-transform: uppercase;
        margin-bottom: 2%;
    }

    p {
        font-size: 2vmin;
        max-width: 100%;
        width: 80%;
        color: #ffffff;
        margin-bottom: 3%;
    }

    button {
        position: relative;
        font-size: 2.5vmin;
        padding: 2%;
        max-width: 12rem;
        width: 100%;
        background-color: #000000;
        border: 3px solid #ffffff;
        color: #ffffff;
        z-index: 1;
    }

    button::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #ffffff;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 200ms ease-in-out;
        z-index: -1;
    }
        
    button:hover {
        color: #000000;
        border: 3px solid transparent;
    }
    
    button:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    @media screen and (max-width: 1024px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`