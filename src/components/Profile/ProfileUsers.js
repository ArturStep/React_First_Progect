import React from 'react';
import ProfileContainer from "./ProfileContainer";
import {useParams} from "react-router-dom";

const ProfileUsers = () => {
    const {userId} = useParams()
    return <ProfileContainer userId={userId}/>
}

export default ProfileUsers;