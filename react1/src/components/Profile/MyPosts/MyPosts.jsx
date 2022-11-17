import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post'

const MyPosts = (props) => {
   
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (


        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button class="button" type="button"><span>Add post</span></button>
                </div>
                <div>
                <button class="button" type="button"><span>Remove</span></button>
                </div>
            </div>
            <div className={s.posts}>
            {postsElement}    
            </div>
        </div >

    );

}
export default MyPosts;