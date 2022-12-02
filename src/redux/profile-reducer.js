const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are you?', likesCount: 7 },
        { id: 2, message: 'Hi,I am fine!', likesCount: 9 },
        { id: 3, message: 'How old are you?', likesCount: 6 },
        { id: 4, message: 'Where are you from?', likesCount: 55 },
        { id: 5, message: 'I am from Ukraine', likesCount: 999 },
        { id: 6, message: 'That is Great!', likesCount: 998 },
    ],
    newPostText: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;