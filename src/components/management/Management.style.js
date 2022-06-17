import styled from "styled-components"

export const Header = styled.h1`
    p {
        font-size: 10vmin;
        font-weight: 300;
    }

    .sideMenuBtn {
        background-color: transparent;
        border: none;
        opacity: 0.8;
        transform: scale(0.9);
        transition: all 200ms ease-in-out;
        aspect-ratio: 1/1;
        display: none;
        width: 5vmin;
        @media screen and (max-width:1024px) {
            display: block;
            position: fixed;
        }

        &:hover {
            opacity: 1;
            transform: scale(1);
        }
    }
`

export const ManagementContainer = styled.div`
    text-align: end;
    padding: 1.5% 3%;
`

export const ProductContainer = styled.div`
    max-width: 100vmin;
    width: 100%;
    margin-top: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;

    @media screen and (min-width: 1440px) {
        max-width: 100vw;
    }
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledSearchBar = styled.form`
    margin-bottom: 2rem;

    button {
        border: none;
        outline: none;
        background-color: transparent;
        aspect-ratio: 1/1;
    }

    input {
        margin-left: 1.4%;
        outline: none;
        border: none;
        border-bottom: 1px solid ${(props) => props.isMobile ? "#ffffff" : "#000000"} !important;
        background-color: transparent;
        font-size: 2vmin;
        font-weight: 300;
        padding:1% 2%;
        color: ${(props) => props.isMobile ? "#ffffff" : "#000000"};
    }

    svg {
        width: 3vmin;
        aspect-ratio: 1/1;
    }
`

export const SidemenuContainer = styled.div`
    text-align: start;
    width: 30%;
    transition: transform 200ms ease-in-out;
    background-color: ${(props)=> props.isMobile ? "#000000" : "#ffffff"};

    form {
        margin-bottom: 2rem;

        button {
            border: none;
            outline: none;
            background-color: transparent;
            aspect-ratio: 1/1;
        }

        input {
            margin-left: 1.4%;
            outline: none;
            border: none;
            border-bottom: 1px solid #000000;
            font-size: 2vmin;
            font-weight: 300;
            padding:1% 2%;
        }
    }

    ul {
        list-style: none;
        text-align: start;
    }

    li {
        margin-bottom: 1.5%;
        cursor: pointer;
        font-size: 2vmin;
        opacity: 0.7;
        transition: opacity 150ms ease-in;

        svg {
            width: 3vmin;
            aspect-ratio: 1/1;
        }
    }

    li:hover {
        opacity: 1;
    }

    @media screen and (max-width:1024px) {
        & {
            position: fixed;
            color: #ffffff;
            transform: translateX(${(props) => props.isMobile ? "0%" : "-120%"});
            top: 40vh;
            padding: 2%;
        }
    }

    @media screen and (max-width:768px) {
        & {
            width: 40%;
        }

        li {
            font-size: 3vmin;
        }

        form {
            input {
                font-size: 3vmin;
            }
    }
    }
`

export const ProductDetailContainer = styled.div`
    max-width: 20rem;
    width: 100%;
    padding: 3%;
    border: 2px solid #000000;
    border-radius: 10px;
    text-align: start;
    margin-left: 2%;
    margin-bottom: 1%;
    overflow-y: auto;

    button {
        padding: 1%;
        max-width: 27vmin;
        width: 100%;
        background-color: transparent;
        border: 1px solid;
        font-size: 1.8vmin;
        font-weight: 300;
        margin-bottom: 5%;
        opacity: 0.9;
        transform: scaleX(0.95);
        transition: all 200ms ease-in-out;
    }

    button:hover {
        transform: scaleX(1);
        opacity: 1;
    }

    .deleteBtn {
        border-color: #d91c1c;
        color: #d91c1c;
    }

    .productWrapper {
        margin-bottom: 3%;
        height: 23rem;
    }

    @media screen and (max-width: 768px) {
        & {
            max-width: 28vmin;
        }

        button {
            font-size: 2vmin;
        }
    }

    @media screen and (max-width: 375px) {
        & {
            max-width: 45vmin;
        }

        button {
            max-width: 40vmin;
            font-size: 4vmin;
        }
    }
`

export const ProductImg = styled.img`
    max-width: 26vmin;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    margin-bottom: 5%;

    @media screen and (max-width: 375px) {
        & {
            max-width: 43vmin;
            padding: 1%;
        }
    }
`

export const ProductInfoContainer = styled.div`
    width: 100%;

    h2 {
        font-size: 2vmin;
    }

    p {
        font-size: 1.4vmin;
        font-weight: 300;
        margin-bottom: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        h2 {
            font-size: 3vmin;
        }

        p {
            font-size: 2vmin;
        }
    }

    @media screen and (max-width: 375px) {
        h2 {
            width: 30vmin;
            font-size: 6vmin;
        }

        p {
            width: 30vmin;
            font-size: 4vmin;
        }
    }
`