import styled from "styled-components"

export const DiscoverFieldContainer = styled.div`
    background-color: #000000;
    display: flex;

    div {
        padding: 3%;
    }

    h1 {
        color: #ffffff;
        font-size: 5vmin;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    p {
        font-size: 2vmin;
        max-width: 100%;
        width: 80%;
        color: #ffffff;
        margin-bottom: 3rem;
    }

    img {
        max-width: 50vmin;
        width: 100%;
        height: auto;

        @media screen and (min-width: 1440px) {
            max-width: 100vmin;
        }
    }

    button {
        background-color: #000000;
        border: 3px solid #ffffff;
        color: #ffffff;
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
    }
    
    :hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`