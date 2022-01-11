import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile/*'
                           element={<Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}/>}/>

                    <Route path='/dialogs/*'
                           element={<Dialogs
                               store={props.store}
                               dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/news/*'
                           element={<News posts={props.state.posts}/>}/>
                    <Route path='/music/*'
                           element={<Music posts={props.state.posts}/>}/>
                    <Route path='/settings/*'
                           element={<Settings posts={props.state.posts}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;