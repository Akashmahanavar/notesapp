import styles from '../components/Home.module.css'
//import { MdDeleteForever } from 'react-icons/md';
export default function Note({ id, text, date, handleDeleteNote ,handleEditNote}) {
    return (
      <div className={styles.note}>
        <span>{text}</span>
        <div className={styles.notefooter}>
            <small>{date}</small>
            <button 
            onClick={() => handleDeleteNote(id)}
            className={styles.save}
            size='1.3em'
            >Delete</button>
            <button 
            onClick={() => handleEditNote(id)}
            className={styles.save}
            size='1.3em'
            >Edit</button>
        </div>
      </div>
    )
  }
