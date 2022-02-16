import React from 'react';
import Profile from "./Profile";
import {getUsersProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "../../utils/withRouter";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : null
            this.props.getUsersProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'} />;
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUsersProfile})(WithURLDataContainerComponent);