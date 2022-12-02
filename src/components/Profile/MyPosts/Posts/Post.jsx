import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/6532/6532058.png'></img>
           { props.message }
            <div>
                <span>Like</span>
            </div>
        </div>


    );

}
export default Post;