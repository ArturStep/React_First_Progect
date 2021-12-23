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
                    <Route path='/profile/*' element={<Profile postData={props.postData}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs postData={props.postData}/>}/>
                    <Route path='/news/*' element={<News postData={props.postData}/>}/>
                    <Route path='/music/*' element={<Music postData={props.postData}/>}/>
                    <Route path='/settings/*' element={<Settings postData={props.postData}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;