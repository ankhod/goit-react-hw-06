import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contact}>
      <span>
        <FaUser /> {contact.name} <FaPhone /> {contact.number}
      </span>
      <button onClick={handleDelete} className={css.deleteBtn}>
        Delete
      </button>
    </li>
  );
}
