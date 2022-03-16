import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileUsers from "./components/Profile/ProfileUsers";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId'
                           element={<ProfileUsers />}/>
                    <Route path='/profile'
                           element={<ProfileContainer />}/>
                    <Route path='/users/*'
                           element={<UsersContainer />}/>
                    <Route path='/login/*'
                           element={<LoginContainer />}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer />}/>
                    <Route path='/news/*'
                           element={<News />}/>
                    <Route path='/music/*'
                           element={<Music />}/>
                    <Route path='/settings/*'
                           element={<Settings />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;