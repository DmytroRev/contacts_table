import { useSelector } from "react-redux";
import { visibleContacts } from "../../redux/contactSlice";
import { Contact } from "../Contacts/Contact";

export const ContactList = () => {
  const contact = useSelector(visibleContacts);

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
        {contact.map((contact) => (
          <Contact key={contact.id} item={contact} />
        ))}
      </tbody>
    </table>
  );
};
