import { useState } from "react";
import "./ButtonOpenModal.css";

type ButtonOpenModalProps = {
  openModal: () => void;
}

export const ButtonOpenModal = ({openModal}: ButtonOpenModalProps) => {



  return (
    <div>
      <button className='button' onClick={openModal}>
        Add contact
      </button>

    </div>
  );
};
