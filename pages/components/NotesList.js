import styles from '../components/Home.module.css'
import AddNote from './AddNote';
import Note from './Note';
export default function NotesList({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleEditNote,
}) {
    return (
      <div className={styles.noteslist}>
        {notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					handleEditNote={handleEditNote}
				/>
		))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    )
  }
  