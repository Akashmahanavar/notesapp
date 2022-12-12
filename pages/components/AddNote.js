import styles from '../components/Home.module.css'
import { useState } from "react";
export default function AddNote({ handleAddNote }) {
    const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

    return (
        <div className={[styles.note, styles.new].join(" ")} >
            <textarea className={styles.textare}rows={8} cols={10} placeholder="type here to add a note..." value={noteText}
				onChange={handleChange}>
            </textarea>
            <div className={styles.notefooter}>
                <small>
                    {characterLimit - noteText.length} Remaining
                </small>
                <button className={styles.save} onClick={handleSaveClick}>
                    Save
                </button>
            </div>
        </div>
    )
}