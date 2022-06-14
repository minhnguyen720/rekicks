import React from 'react'
import { Link } from 'react-router-dom';
import { StyledNavLink } from './Navbar.style';

export function NavLink(props) {
    return(
        <Link to={props.to}>
            <StyledNavLink>{props.label}</StyledNavLink>
        </Link>
    );
}