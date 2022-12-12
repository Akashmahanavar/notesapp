import styles from '../components/Home.module.css'
import {useRouter} from 'next/router';

export default function Edit(notes) {
    
    const handleSaveClick = () => {
		
	};
    return (
        <div className={[styles.note, styles.new].join(" ")} >
            <textarea className={styles.textare}rows={8} cols={10} placeholder="type here to add a note..." value={noteText}
				onChange={handleChange}>
            </textarea>
        </div>
    )
}
