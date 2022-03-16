import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
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

export default connect(mapStateToProps, {login, logout})(LoginContainer);

