import React from 'react'
import { Overlay, StyledCreateModal } from './Modal.style'
import { closeIcon, uploadIcon } from '../../assets/imgs/Image';

export default function CreateModal({ isOpen, children, closeModal }) {
  if (!isOpen) return;

  return (
    <>
      <Overlay />
      <StyledCreateModal>
        <div className="buttonContainer">
          <button><img src={closeIcon} alt='' /></button>
        </div>
        <label>Product ID</label>
        <input type="text" placeholder="ID"></input>
        <label>Product Name</label>
        <input type="text" placeholder="Name"></input>
        <label>Capacity</label>
        <input type="number" placeholder="Capacity"></input>
        <label>Product Image</label>
        <input type='file' accept="image/*" id='uploadFile' />
        <div className="submitButtonContainer">
          <button onClick={closeModal} className="submitBtn" type="submit">Create</button>
        </div>
      </StyledCreateModal>
    </>
  );
}
