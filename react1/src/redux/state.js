import { useCallback } from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"



let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi,how are you?', likesCount: 7 },
            { id: 2, message: 'Hi,I am fine!', likesCount: 9 },
            { id: 3, message: 'How old are you?', likesCount: 6 },
            { id: 4, message: 'Where are you from?', likesCount: 55 },
            { id: 5, message: 'I am from Ukraine', likesCount: 999 },
            { id: 6, message: 'That is Great!', likesCount: 998 },
        ],
        newPostText: 'UFreedom'

    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Paul' },
            { id: 2, name: 'Sweetheart' },
            { id: 3, name: 'Mom' },
            { id: 4, name: 'Naz' },
            { id: 5, name: 'Bog' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your project?' },
            { id: 3, message: 'When do you show it us?' },
            { id: 4, message: 'Hru?' },
            { id: 5, message: 'Good Morning!' },
        ]

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
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
/*dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callsubscriber(this._state);

}*/

export default state;