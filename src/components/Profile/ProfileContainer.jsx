import React from 'react';
import Profile from "./Profile";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.userId;
        if (!userId) {
            userId = this.props.authorizedUserid;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserid: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}
)(ProfileContainer);