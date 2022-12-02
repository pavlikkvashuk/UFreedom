import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post'



const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={Math.random()} />);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button className="button" type="button" onClick={onAddPost}><span>Add post</span></button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div >
    );
}
export default MyPosts;