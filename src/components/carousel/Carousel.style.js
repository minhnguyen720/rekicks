import styled from "styled-components"

export const StyledImg = styled.img`
    width: 40vmin;
    aspect-ratio: 9/14;
    border-radius: 20px;
`

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`

export const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    z-index: 1;

    h1 {
        font-size: 9vmin;
        color: #ffffff;
    }

    p {
        max-width: 40rem;
        width: 100%;
        color:#ffffff;
        font-size: 4vmin;
        font-weight: 200;
    }
    
    span {
        background: #B8E1FC;
        background: linear-gradient(to top left,#B8E1FC 0%, #231421 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`

export const CarouselContainer = styled.div`
    position: relative;
    max-width: 100vw;
    width:100%;
    display: flex;
    justify-content: center;
    padding: 5rem 0;
    overflow-y: hidden;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(30%);
    }
`

export const CheckOutBtn = styled.button`
    max-width: 20rem;
    width:80%;
    font-size: 2vmin;
    padding: 3%;
    background-color: #ffffff;
    border: none;
    color: #000000;
    position: relative;
    overflow-x: hidden;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 200ms ease-in-out;
        z-index: -1;
    }
        
    &:hover {
        color: #ffffff;
    }
    
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

`