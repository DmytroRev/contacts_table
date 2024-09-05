import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../../redux/contactsApi";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { ButtonOpenModal } from "../ButtonOpenModal/ButtonOpenModal";
import { AppDispatch } from "../../redux/store";
import { ModalContactForm } from "../ModalContactForm/ModalContactForm";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonOpenModal openModal={openModal} />
      <ModalContactForm isOpen={isModalOpen} onClose={closeModal} />
      <SearchBox />
      <ContactList />
    </>
  );
}
