import { useSelector } from "react-redux";
import { Contact as ContactType } from '../../types';
import { visibleContacts } from "../../redux/contactSlice";
import { Contact } from "../Contacts/Contact.js";
import "./ContactList.module.css";
import React from "react";


export const ContactList: React.FC = () => {
  const contacts = useSelector(visibleContacts);

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
        {contacts.map((contact: ContactType) => (
          <Contact key={contact.id} item={contact} />
        ))}
      </tbody>
    </table>
  );
};
