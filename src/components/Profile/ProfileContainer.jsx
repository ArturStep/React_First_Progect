import React from 'react';
import Profile from "./Profile";
import {getUsersProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "../../utils/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : null
        this.props.getUsersProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUsersProfile})(WithURLDataContainerComponent);