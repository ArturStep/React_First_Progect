import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Ratatata', likesCount: 22},
                {id: 4, message: 'bublik', likesCount: 1},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: '',
            dialogs: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Polina'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Eugene'},
                {id: 5, name: 'Kristina'},
                {id: 6, name: 'Roma'}
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State Changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;