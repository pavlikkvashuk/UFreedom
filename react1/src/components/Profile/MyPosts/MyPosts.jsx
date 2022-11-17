import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post'

const MyPosts = (props) => {
   
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text=newPostElement.current.value;
        alert(text);
    }

    return (


        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                <button class="button" type="button" onClick={addPost}><span>Add post</span></button>
                </div>
                <div>
               <button class="button" type="button" onClick={addPost}><span>Remove</span></button>
                </div>
            </div>
            <div className={s.posts}>
            {postsElement}    
            </div>
        </div >

    );

}
export default MyPosts;