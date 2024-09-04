import { useState } from "react";
import { ModalContactForm } from "../ModalContactForm/ModalContactForm";
import css from "./ButtonOpenModal.module.css";
export const ButtonOpenModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className={css.button} type="click" onClick={openModal}>
        Add contact
      </button>
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
