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
      <div className={css.contactInfo}>
        <div className={css.infoRow}>
          <FaUser />
          <span className={css.name}>{contact.name}</span>
        </div>
        <div className={css.infoRow}>
          <FaPhone />
          <span className={css.number}>{contact.number}</span>
        </div>
      </div>
      <button onClick={handleDelete} className={css.deleteBtn}>
        Delete
      </button>
    </li>
  );
}
