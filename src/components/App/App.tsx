import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../../redux/contactsApi";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { ModalContactForm } from "../ModalContactForm/ModalContactForm";
import { ButtonOpenModal } from "../ButtonOpenModal/ButtonOpenModal";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <ButtonOpenModal />
      <ModalContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
