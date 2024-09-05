
import "./Contact.css";
import { Contact as ContactType } from '../../types';

interface ContactProps {
  item: ContactType;
}

export const Contact: React.FC<ContactProps> = ({ item }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};


