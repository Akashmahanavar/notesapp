import styles from '../components/Home.module.css'
import {useRouter} from 'next/router';

export default function Header() {
    const route = useRouter();
    const logout=() => {
		route.push('/')
        sessionStorage.removeItem('user');
	};
    return (
        <div className={styles.header}>
            <h1 className={styles.header}>Notes</h1>
            <button className={styles.search} onClick={logout}>Logout</button>
        </div>
    )
}
