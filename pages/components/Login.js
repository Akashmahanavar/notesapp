import Head from 'next/head'
import { useState } from 'react';
import { useEffect } from 'react';
import Note from '../components/Note';
import { nanoid } from 'nanoid';
import NotesList from '../components/NotesList';
import styles from '../components/Home.module.css'
import Header from '../components/Head';
import Search from '../components/Search';
import {useRouter} from 'next/router';

export default function Login() {
	const [notes, setnotes] = useState([{
		id: nanoid(),
		text: "This is my first note...",
		date: "11/12/2022"
	},
	{
		id: nanoid(),
		text: "This is my Second note...",
		date: "11/12/2022"
	},
	{
		id: nanoid(),
		text: "This is my Third note...",
		date: "11/12/2022"
	}
	]);
	const [searchText, setSearchText] = useState('');
	const route = useRouter();
	useEffect(() => {
		const username=sessionStorage.getItem('user');
		if(username == '' || username == null){
			route.push('/');
		}
	}, []);
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setnotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setnotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setnotes(newNotes);
	};

	const editNote = (noteId) => {
		for (let i = 0; i < notes.length; i++) {
			if (notes[i].id == noteId) {
				
			}
		}
	};

	return (
		<div className={styles.container}>
			<Header />
			<Search handleSearchNote={setSearchText} />
			<NotesList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText)
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
				handleEditNote={editNote}
			/>
		</div>
	)
}