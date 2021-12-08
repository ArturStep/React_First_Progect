import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0EU78bTgk-k0C7TUTIXz1ilDTo2Pg6LT1A&usqp=CAU' />
      post 1
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;