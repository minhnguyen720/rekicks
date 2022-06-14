import React from 'react'
import { IconContainer } from './style/Icon.style'
import { ReactComponent as BurgerIcon } from "../../../assets/imgs/icons/burger-menu.svg";

export default function BurgerMenu(props) {
    
    return (
        <IconContainer rotate={props.rotate}>
            <BurgerIcon
                onClick={props.onClick}
                rotate={props.rotate}
                stroke={"white"}
            />
        </IconContainer>
    );
}