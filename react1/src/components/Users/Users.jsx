import React from "react";
import styles from './users.module.css';


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/6532/6532058.png', followed: true, fullName: 'Pavlo', status: 'i like you', location: { city: 'Lviv', country: 'Ukraine' } },
            { id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/6532/6532058.png', followed: false, fullName: 'Paul', status: 'i like you too', location: { city: 'London', country: 'England' } },
            { id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/6532/6532058.png', followed: true, fullName: 'Ivar', status: 'i like you more', location: { city: 'Warsaw', country: 'Poland' } },
            { id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/6532/6532058.png', followed: false, fullName: 'Rollo', status: 'i like you sometimes', location: { city: 'Riga', country: 'Latvia' } },
        ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;