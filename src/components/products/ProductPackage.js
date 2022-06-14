import React from 'react'
import { DummyData } from '../../assets/Dummy';

import { Container, Product, ProductContainer, ProductName, ProductPrice, Description, BuyButton } from "./Product.style"
import ProductSelect from "./ProductSelect";

export default function ProductPackage(props) {
    return (
        <ProductContainer>
            <Product src={props.src} />
            <Container>
                <ProductName>{props.name}</ProductName>
                <Container>
                    <Description>
                        {DummyData[0].description}
                    </Description>
                </Container>
                <ProductPrice>{props.price}</ProductPrice>
                <ProductSelect />
                <BuyButton>
                    Add to cart
                </BuyButton>
            </Container>
        </ProductContainer>
    );
}