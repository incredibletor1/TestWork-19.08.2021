import { apiSetHeader } from './UserService'
import { types } from './UserActionsTypes'
import { userAxios } from './UserService';
import { registrationFailure, registrationStarted, registrationSuccess, loginFailure, loginStarted, loginSuccess, donateFailure, donateStarted, donateSuccess } from './UserActions';


export const registrationUser = (data) => {
    return dispatch => {
        dispatch(registrationStarted());

        userAxios({
            url: 'Registration',
            method: "POST",
            data: data
        })
            .then((res) => {
                dispatch(registrationSuccess(res.status))
            })
            .catch((err) => {
                dispatch(registrationFailure(err.response.data));
            })
    };
};

export const loginUser = (data) => {
    return dispatch => {
        dispatch(loginStarted());

        userAxios({
            url: 'Login',
            method: "POST",
            data: data
        })
            .then((res) => {
                dispatch(loginSuccess(res.data))
            })
            .catch((err) => {
                dispatch(loginFailure(err.response.data));
            })
    };
};


