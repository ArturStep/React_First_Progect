import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
          {/*  <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKZOd3Bmj95fjujf17X6TvLYWPx8SgLPmPw&usqp=CAU'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>Контакты:</div>
                <li>Facebook: {props.profile.contacts.facebook}</li>
                <li>Website: {props.profile.contacts.website}</li>
                <li>VK: {props.profile.contacts.vk}</li>
                <li>Twitter: {props.profile.contacts.twitter}</li>
                <li>Instagram: {props.profile.contacts.instagram}</li>
                <li>Youtube: {props.profile.contacts.youtube}</li>
                <li>Github: {props.profile.contacts.github}</li>
                <li>MainLink: {props.profile.contacts.mainLink}</li>
            </div>
        </div>
    )
}

export default ProfileInfo;