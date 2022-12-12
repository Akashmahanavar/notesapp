import styles from './components/Home.module.css'
import { useState } from 'react';
import {useRouter} from 'next/router';

export default function Home() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const route = useRouter();
    function handleClick(){
        if(username == 'scribe' && password == 'scribe@1234')
        {
            sessionStorage.setItem('user',username);
            route.push('/components/Login');
        }
        else
        {
            alert('Incorrect Credentials');
        }
    }
    return (
        <div className={styles.login}>
            <h1 className={styles.title}>Login page....</h1>
            
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(event) =>setUsername(event.target.value)}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" onChange={(event)=>setPassword(event.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Sign in</button>
        </div>
    )
}