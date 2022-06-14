import React from 'react';
import { LogoContainer } from './Navbar.style';

export default function Logo(props) {
    return(
        <LogoContainer>
            <img src={props.src} alt=''/>
        </LogoContainer>
    );
}