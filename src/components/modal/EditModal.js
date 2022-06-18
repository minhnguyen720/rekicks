import React,{useState} from 'react';
import { Overlay, StyledCreateModal } from './Modal.style'
import { closeIcon } from '../../assets/imgs/Image';

export default function EditModal(props) {
    const [itemValue, setItemValue] = useState({
        itemName: props.item.name,
        itemDescription: props.item.desc,
        itemPrice: props.item.price,
        itemBrandId: props.item.brand
    })

    const submitForm = () => {
        const item = {
            name: itemValue.itemName,
            description: itemValue.itemDescription,
            price: itemValue.itemPrice,
            brandId: itemValue.itemBrandId
        }

        fetch(`http://localhost:8080/api/item/${props.item.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })

        document.location.reload();
        props.closeModal();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setItemValue((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    if (!props.isOpen) return;

    return (
        <>
            <Overlay />
            <StyledCreateModal>
                <div className="buttonContainer">
                    <button onClick={props.closeModal}>
                        <img src={closeIcon} alt='' />
                    </button>
                </div>

                <label>Product Name</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name='itemName'
                    placeholder="Name"
                    value={itemValue.itemName}
                />

                <label>Brands</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name='itemBrandId'
                    placeholder="Brand"
                    value={itemValue.itemBrandId}
                />

                <label>Price</label>
                <input
                    onChange={handleChange}
                    type="number"
                    name='itemPrice'
                    placeholder="Price"
                    value={itemValue.itemPrice}
                />

                <label>Description</label>
                <textarea
                    onChange={handleChange}
                    type="text"
                    name='itemDescription'
                    placeholder="Description"
                    value={itemValue.itemDescription}
                />

                {/* <label>Product Image</label>
            <input type='file' accept="image/*" id='uploadFile' /> */}

                <div className="submitButtonContainer">
                    <button onClick={submitForm} className="submitBtn" type="submit">{props.btnLabel}</button>
                </div>
            </StyledCreateModal>
        </>
    );
}
