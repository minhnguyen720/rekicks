import React from 'react'
import styled from "styled-components" 
import { arrowLeftIcon } from '../../assets/imgs/Image';

const BackButtonContainer = styled.div `
    margin-left: 10rem;
    margin-bottom: 4rem;
    margin-top: 1.2%;

    img {
        cursor: pointer;
    }

    @media screen and (max-width: 1250px) {
        margin-left: 2rem;
    }

    @media screen and (max-width: 425px) {
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
`

export default function BackButton() {
    return (
        <BackButtonContainer>
            <a href='' role='button'>
                <img src={arrowLeftIcon} alt='' />
            </a>
        </BackButtonContainer>
    );
}