import SavedUser from './SubComponents/SavedUser';
import { useState } from 'react';
import styles from '../CSS_Modules/switchUser.module.css';

export default function SwitchUser() {

    const users = localStorage.getItem('users');

    const [usersList, setUsersList] = useState(users);

    return (
       

        <div className={styles.switchUserBox}>
            <h1>Switch User</h1>
            <div className={styles.switchUserContainer}>
                {usersList && JSON.parse(usersList).map((user: any, index: number) => {
                    return (
                    <SavedUser key={index} 
                    symbol={user.symbol}
                    token={user.token}
                    />
                    )

                })}
            </div>
        </div>
    )
}