import { FaUser, FaPhone } from 'react-icons/fa'; // Імпортуємо іконки
import styles from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>
          <FaUser className={styles.icon} /> {name}
        </span>
        <span className={styles.number}>
          <FaPhone className={styles.icon} /> {number}
        </span>
      </div>
      <button onClick={() => onDelete(id)} className={styles.delete}>
        Delete
      </button>
    </li>
  );
}
