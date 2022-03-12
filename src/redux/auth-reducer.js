import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN = 'LOGIN';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: '',
    rememberMe: false,
    captcha: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case  LOGIN:

            return {
                ...state,
                userId : action.userId
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const loginSuccess = (userId) => ({type: LOGIN, userId});

export const getAuthUserData = () => {
    return (dispatch) =>{
        authAPI.me()
            .then(response => {
                console.log(response);
                if (response.data.resultCode === 0) {
                    let {Id, email, login} = response.data.data;
                    dispatch(setAuthUserData(Id, email, login));
                }
            });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) =>{
        debugger;
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let userId = response.data.data.userId;
                    dispatch(loginSuccess(userId));
                }
            });
    }
}

export const logout = () => {
    authAPI.logout()
}

export default authReducer;