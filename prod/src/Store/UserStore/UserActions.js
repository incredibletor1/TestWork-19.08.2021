import { types } from './UserActionsTypes'

export const registrationStarted = () => {
    return {
        type: types.REGISTRATION_STARTED,
    }
}

export const registrationSuccess = (newStatus) => {
    return {
        type: types.REGISTRATION_SUCCESS,
        payload: newStatus
    }
}

export const registrationFailure = (error) => {
    return {
        type: types.REGISTRATION_FAILURE,
        payload: error
    }
}

export const loginStarted = () => {
    return {
        type: types.LOGIN_STARTED,
    }
}

export const loginSuccess = (userInfo) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: userInfo
    }
}

export const loginFailure = (error) => {
    return {
        type: types.LOGIN_FAILURE,
        payload: error
    }
}