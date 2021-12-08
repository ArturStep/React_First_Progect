import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKZOd3Bmj95fjujf17X6TvLYWPx8SgLPmPw&usqp=CAU' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;