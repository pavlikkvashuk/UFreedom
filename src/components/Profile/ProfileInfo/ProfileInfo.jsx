import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.pimg} src='https://kiyavia.com/files/TravelProviderInUkraine/cities/kyiv/Kiev_1920_4.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                description
            </div>

        </div>
    );
}
export default ProfileInfo;