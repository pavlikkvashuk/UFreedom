import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post'
import { updateNewPostTextActionCreator } from '../../../redux/store';
import { addPostActionCreator } from '../../../redux/store';


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={Math.random()} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = (updateNewPostTextActionCreator(text));
        props.dispatch(action)
    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button className="button" type="button" onClick={addPost}><span>Add post</span></button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div >

    );

}
export default MyPosts;