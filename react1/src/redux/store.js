/*import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
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
            ],
            newMessageBody: "",
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;
*/








