import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostForm from "./MyPostForm";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (newPostText) => {
        props.addPost(newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
               <MyPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;