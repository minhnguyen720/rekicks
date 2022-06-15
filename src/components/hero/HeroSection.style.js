import styled from "styled-components"

export const StyledImg = styled.img`
    width: 100vmin;
    aspect-ratio: 16/9;
`

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`

export const HeroSection = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2%;
    z-index: 1;
    align-items: center;

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
        font-family: 'Montserrat',sans-serif;
        background: #B8E1FC;
        background: linear-gradient(to top left,#B8E1FC 0%, #231421 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

`

export const HeroContainer = styled.div`
    position: relative;
    max-width: 100vw;
    width:100%;
    display: flex;
    justify-content: center;
    padding: 10rem 0;
    overflow-y: hidden;

    video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(30%);
    }
`

export const CheckOutBtn = styled.button`
    max-width: 12rem;
    width:80%;
    font-size: 2.5vmin;
    padding: 2%;
    background-color: transparent;
    border: 3px solid #ffffff;
    color: #ffffff;
    position: relative;
    overflow-x: hidden;
    border-radius: 5px;
    z-index: 1;

    &::before {
        border-radius: 5px;
        z-index: -1;
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transform-origin: right;
        transform: scaleX(0);
        transition: transform 200ms ease-in-out;

        background: rgb(184,225,252);
        background: linear-gradient(180deg, rgba(184,225,252,1) 0%, rgba(35,20,33,1) 100%);
    }
        
    &:hover {
        color: #ffffff;
        border: 3px solid transparent;
    }
    
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

`