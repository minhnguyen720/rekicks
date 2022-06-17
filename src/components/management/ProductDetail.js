import React from 'react'
import { ProductDetailContainer, ProductImg, ProductInfoContainer } from './Management.style';

export default function ProductDetail(props) {
    return (
        <ProductDetailContainer>
                <ProductImg src={props.src} alt='' />
                <ProductInfoContainer>
                    <h2>{props.productName}</h2>
                    <p><strong>ID: </strong>{props.productId}</p>
                    <p><strong>Capacity: </strong>{props.productCapacity}</p>
                    <p><strong>Available size: </strong>{props.availSize}</p>
                </ProductInfoContainer>
            <button>Edit</button>
            <button className="deleteBtn">Delete</button>
        </ProductDetailContainer>
    );
}