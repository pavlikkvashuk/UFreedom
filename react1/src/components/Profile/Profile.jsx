import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className='imgpr'>
                <img src='https://cdn-icons-png.flaticon.com/512/3237/3237472.png' />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>

    );

}
export default Profile;