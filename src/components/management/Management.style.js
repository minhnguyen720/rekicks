import styled from "styled-components"

export const Header = styled.h1`
    font-size: 10vmin;
    font-weight: 300;
`

export const ManagementContainer = styled.div`
    text-align: end;
    padding: 1% 3%;
`

export const ProductContainer = styled.div`
    max-width: 100vmin;
    width: 100%;
    margin-top: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    overflow-y: scroll;

    @media screen and (min-width: 1440px) {
        max-width: 100vw;
    }
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Sidemenu = styled.div`
    width: 15rem;
    ul {
        list-style: none;
        text-align: start;
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

    button {
        padding: 1%;
        max-width: 27vmin;
        width: 100%;
        background-color: transparent;
        border: 1px solid;
        font-size: 1.4vmin;
        font-weight: 300;
        margin-bottom: 5%;
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
    max-width: 20vmin;
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