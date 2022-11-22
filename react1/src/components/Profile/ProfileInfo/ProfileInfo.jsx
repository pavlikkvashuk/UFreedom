import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (

        <div>
            <div>
                <img className={s.pimg} src='https://kiyavia.com/files/TravelProviderInUkraine/cities/kyiv/Kiev_1920_4.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>

    );

}
export default ProfileInfo;