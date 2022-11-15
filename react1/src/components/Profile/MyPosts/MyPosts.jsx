import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post'

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi,how are you?',likesCount: 7},
        {id: 2, message: 'Hi,I am fine!',likesCount: 9},
        {id: 3, message: 'How old are you?', likesCount: 6},
        {id: 4, message: 'Where are you from?',likesCount: 55},
        {id: 5, message: 'I am from Ukraine',likesCount: 999},
        {id: 6, message: 'That is Great!',likesCount: 998},
    ]
    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (


        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
            {postsElement}    
            </div>
        </div >

    );

}
export default MyPosts;