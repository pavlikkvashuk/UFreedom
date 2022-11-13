import React from 'react';
import s from './MyPosts.module.css';
import Post from'./Posts/Post'

const MyPosts = () => {
    return (


        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
            <Post message='Hi,how are you?'/>
            <Post message='Hi,I am fine!'/>
            <Post message='How old are you?'/>
            <Post message='Where are you from?'/>
            <Post message='I am from Ukraine'/>
            <Post message='That is Great!'/>
                
            </div>
        </div>

    );

}
export default MyPosts;