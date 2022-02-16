import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const getAuthUserData = () => {
    return (dispatch) =>{
        authAPI.me()
            .then(response => {
                console.log(response);
                if (response.data.resultCode === 0) {
                    let {Id, email, login} = response.data.data.login;
                    dispatch(setAuthUserData(Id, email, login));
                }
            });
    }
}

export default authReducer;