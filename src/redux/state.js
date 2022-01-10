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
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Polina'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Eugene'},
                {id: 5, name: 'Kristina'},
                {id: 6, name: 'Roma'}
            ],
        }
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
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT')
        {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;