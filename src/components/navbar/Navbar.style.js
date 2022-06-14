import { Link } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
`

export const Navbar = styled.div`
    width: 100%;
    height: 11rem;
    overflow: hidden;
`

export const Nav = styled.ul`
    display: flex;
    height: 100%;
    margin-right:3%;
    flex-direction: row;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    transition: transform 200ms ease-in;

    a {
        text-decoration: none;
        color: #000000;
    }
    
    @media screen and (max-width: 425px) {
        display: block;
        position: absolute;
        margin-left: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateX(${props => props.rotate ? "0" : "-100%"});
        width: 100vw;
        background-color: #000000;
        text-align: start;
        z-index: 10;
        padding-left: 2rem;
        padding-top: 10rem;
        padding-bottom: 2rem;
    }
`

export const StyledNavLink = styled.li`
    width: 8rem;
    cursor: pointer;
    font-size: 2vmin;
    position: relative;
    margin-right:0.8rem;
    overflow:hidden;
    color: #ffffff;

    &:last-child {
        margin-right: 0;
    }

    @media screen and (min-width: 768px) {
        &::before {
            content: '';
            position: absolute;
            top: 90%;
            left: 20%;
            right: 0;
            bottom: 0;
            background-color: #ffffff;
            transform-origin: right;
            transform: scaleX(0);
            transition: transform 200ms ease-in-out;
        }
    
        &:hover::before {
            transform-origin: left;
            transform: scaleX(0.8);
        }
    }

    @media screen and (max-width: 768px) {
        width: 16vmin;
        font-size: 2.5vmin;
    }

    @media screen and (max-width: 425px) {
        width: 100%;
        font-size: 12vmin;
        color: #ffffff;
        margin-bottom: 1rem;
    }
`

export const LogoLink = styled(Link)`
    text-decoration: none;
    margin-left: 3%;
    background: #B8E1FC;
    background: linear-gradient(to top left,#B8E1FC 0%, #231421 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
        color: #ffffff;
    }

    h1 {
        font-family: 'Montserrat',sans-serif;
    }

    @media screen and (max-width: 425px) {
        margin-left: 50%;
        transform: translateX(-50%);
    }
`

export const LogoContainer = styled.div`
     img {
        width: 20vmin;
        height: auto;
    }

    @media screen and (max-width: 425px) {
        img {
            width: 37vw;
        }
    }
`