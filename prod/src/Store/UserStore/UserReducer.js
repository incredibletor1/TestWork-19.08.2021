import { types } from './UserActionsTypes'


const initialState = {
    loading: false,
    responseStatusCode: 0,
    error: null,
    resultReg: false,
    resultLog: false,
    resultDel: false,
    userInfo: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTRATION_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                responseStatusCode: action.payload,
                resultReg: true
            }
        case types.REGISTRATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                resultReg: false
            }
        case types.LOGIN_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userInfo: action.payload,
                resultLog: true
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                resultLog: false
            }
    }
    return state
}
