import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "../../utils/withRouter";
import {login, logout} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginContainer = (props) => {

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <Login login={props.login} logout={props.logout}/>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {login, logout}),
    withRouter,
)(LoginContainer);

