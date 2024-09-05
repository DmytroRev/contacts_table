import { useSelector } from "react-redux";

import { visibleContacts } from "../../redux/contactSlice";
import { Contact } from "../Contacts/Contact.js";
import css from "./ContactList.module.css";
export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  // Проверка уникальности ID
  const ids = contacts.map((contact) => contact.id);
  const uniqueIds = new Set(ids);
  if (uniqueIds.size !== ids.length) {
    console.warn("Есть дублирующиеся ID среди контактов!", ids);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <Contact key={contact.id} item={contact} />
        ))}
      </tbody>
    </table>
  );
};
