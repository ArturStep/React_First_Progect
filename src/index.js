import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Ratatata', likesCount: 22},
    {id: 4, message: 'bublik', likesCount: 1},
]

let dialogs = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Polina'},
    {id: 3, name: 'Artem'},
    {id: 4, name: 'Eugene'},
    {id: 5, name: 'Kristina'},
    {id: 6, name: 'Roma'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
