import styled from "styled-components";

export const ProductContainer = styled.div`
    text-align: center;
    width: 100%;

    @media screen and (min-width: 1440px) {
        justify-content: center;
    }

    @media screen and (min-width:1250px) {
        & {
            padding: 0 10rem 0 10rem;
        }
    }

    @media screen and (min-width: 768px) {
        & {
            display: flex;
        }

        img {
            max-width: 500px;
            padding: 0;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        h1 {
            font-size: 4vmin;
        }

        h2 {
            font-size: 6vmin;
        }
    }

    @media screen and (min-width: 426px) and (max-width: 768px){
        & {
            display: flex;
        }

        img {
            max-width: 50vmin;
            padding: 0;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        h1 {
            font-size: 4vmin;
        }

        h2 {
            font-size: 6vmin;
        }
    }
`

export const Product = styled.img`
    padding: 1rem;
    width: 100%;
    border-radius: 30px;
    aspect-ratio: 1/1;
`

export const ProductName = styled.h1`
    font-size: 8vmin;
    text-transform: uppercase;
    text-align: start;
    padding: 0 1rem;
    font-family: "Oswald",sans-serif;
    font-weight: 500;
`

export const ProductPrice = styled.h2`
    font-size: 13vmin;
    text-align: start;
    padding-left: 1rem;
    font-family: "Oswald",sans-serif;
    font-weight: 500;
`

export const ProductSelect = styled.select`
    & { 
        display: block;
        margin-left: 1rem;
        text-align: start;
        width: 10rem;
        padding: 0.5rem;
        font-family: "Oswald",sans-serif;
    }
`

export const Container = styled.div`
    text-align: start;
    padding-left: 2%;
    & {
        @media screen and (min-width: 768px) {
                display: flex;
                flex-direction: column;
        }
    }
`

export const Description = styled.p`
    max-width: 55rem;
    font-size: 2vmin;
    text-align: start;
    margin-top: 0.2rem;
    font-family: "Oswald",sans-serif;
    display: none;

    & {
        @media screen and (min-width: 426px) {
                display: block;
        }
    }
`

export const BuyButton = styled.button`
    max-width: 50rem;
    width:80%;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #ffffff;
    border: 1px solid #000000;
    font-size: 5vmin;
    font-family: "Oswald", sans-serif;

    & {
        position: relative;
        margin-left: 1rem;
        font-size: 2.5vmin;
        overflow-x: hidden;
        z-index: 1;
    }

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
        transition: transform 300ms ease-in-out;
        z-index: -1;
    }
        
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    &:hover {
        color: #ffffff;
    }
`