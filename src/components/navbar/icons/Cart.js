import React from 'react'
import { ReactComponent as CartIcon } from "../../../assets/imgs/icons/cart-icon.svg";
import { CartIconContainer } from './style/Icon.style';

export function Cart() {
    return(
        <CartIconContainer>
            <CartIcon />
        </CartIconContainer>
    );
}