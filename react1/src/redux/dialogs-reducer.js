const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }],
                newMessageBody: ''
            };
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;