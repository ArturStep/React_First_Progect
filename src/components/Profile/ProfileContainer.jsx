import React from 'react';
import Profile from "./Profile";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "../../utils/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : null
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);