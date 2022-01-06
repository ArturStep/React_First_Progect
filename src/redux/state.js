let rerenderEntireTree = () => {
    console.log(123)
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}



export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;