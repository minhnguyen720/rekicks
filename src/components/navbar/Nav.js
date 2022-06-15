import React, { useState } from 'react'

import { Navbar, Header, Nav as NavContainer, LogoLink } from "./Navbar.style";
import { NavLink } from "./NavLink";
import { burgerIcon} from "../../assets/imgs/Image";
import BurgerMenu from "./icons/BurgerMenu";

export default function Nav() {
    const [rotate, setRotate] = useState(false);

    const handleRotate = () => {
        setRotate(!rotate);
    }

    return (
        <>
            <BurgerMenu
                src={burgerIcon}
                onClick={handleRotate}
                rotate={rotate}
            />
            <Header>
                <LogoLink to="/">
                    <h1>REKICKS.</h1>
                </LogoLink>
                <Navbar>
                    <NavContainer rotate={rotate}>
                        <NavLink to="/" label="Home" />
                        <NavLink to="/products" label="Products" />
                        <NavLink to="/contact" label="Contact" />
                        <NavLink to="/cart" label="Cart" />
                    </NavContainer>
                </Navbar>
            </Header>
        </>
    );
}