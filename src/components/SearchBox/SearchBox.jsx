import styles from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
