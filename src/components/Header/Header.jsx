import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const logout = () => {
        props.logout()
    }
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWXaDd7COVSlym_qmyXEr0nLSa34w31RN0g&usqp=CAU'/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to='/login'>Login</NavLink>}
        </div>
        <div>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    </header>
}

export default Header;