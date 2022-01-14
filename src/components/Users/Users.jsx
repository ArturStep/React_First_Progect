import React from "react";
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Charles_Ernest_Butler_-_King_Arthur.jpg/232px-Charles_Ernest_Butler_-_King_Arthur.jpg',
                    followed: true,
                    fullName: 'Artur',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Charles_Ernest_Butler_-_King_Arthur.jpg/232px-Charles_Ernest_Butler_-_King_Arthur.jpg',
                    followed: true,
                    fullName: 'Polina',
                    status: 'I am a boss too',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Charles_Ernest_Butler_-_King_Arthur.jpg/232px-Charles_Ernest_Butler_-_King_Arthur.jpg',
                    followed: false,
                    fullName: 'Artem',
                    status: 'I am a boss too',
                    location: {city: 'Brest', country: 'Belarus'}
                },

            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoUrl} className={styles.userPhoto}/>
                   </div>
                   <div>
                       {u.followed
                           ? <button onClick={() => {
                               props.unfollow(u.id)
                           }}>Follow</button>
                           : <button onClick={() => {
                               props.follow(u.id)
                           }}>Unfollow</button>}
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

