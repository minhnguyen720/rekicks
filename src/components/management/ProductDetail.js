import React, { useState } from 'react'
import EditModal from '../modal/EditModal';
import { ProductDetailContainer, ProductImg, ProductInfoContainer } from './Management.style';

export default function ProductDetail(props) {
    const [isEditFormOpen, setFormOpen] = useState(false);
    const toggleEditForm = () => {
        setFormOpen(!isEditFormOpen);
    }

    return (
        <ProductDetailContainer>
            {/* <ProductImg src={props.src} alt='' /> */}
            <ProductInfoContainer>
                <h2>{props.productName}</h2>
                <p><strong>ID: </strong>{props.productId}</p>
                <p><strong>Brand: </strong>{props.productBrandId}</p>
                {/* <p><strong>Capacity: </strong>{props.productCapacity}</p> */}
                <p><strong>Price: </strong>{props.productPrice}$</p>
                <p><strong>Desc: </strong>{props.productDesc}</p>
                {/* <p><strong>Available size: </strong>{props.availSize}</p> */}
            </ProductInfoContainer>
            <button onClick={toggleEditForm} id={props.productId}>Edit</button>
            <button onClick={props.handleDelete} className="deleteBtn" id={props.productId}>Delete</button>

            <EditModal
                closeModal={toggleEditForm}
                isOpen={isEditFormOpen}
                btnLabel="Edit"
                item={{
                    name:props.productName,
                    id:props.productId,
                    desc:props.productDesc,
                    price:props.productPrice,
                    brand:props.productBrandId
                }}
            />
        </ProductDetailContainer>
    );
}