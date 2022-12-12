import React from 'react';
import { MdSearch } from 'react-icons/md';
import styles from '../components/Home.module.css'
export default function Search({ handleSearchNote }) {
	return (
		<div className={styles.search}>
			<MdSearch className={styles.MdSearch} size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	)
}