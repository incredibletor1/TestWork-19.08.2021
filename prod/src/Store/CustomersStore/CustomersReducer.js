import { types } from './CustomersActionTypes'


const initialState = {
    loading: false,
    responseStatusCode: 0,
    error: null,
    customerList: [],
}

export const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADDCUSTOMER_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.ADDCUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                responseStatusCode: action.payload,
            }
        case types.ADDCUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.SHOWCUSTOMERLIST_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.SHOWCUSTOMERLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                customerList: action.payload,
            }
        case types.SHOWCUSTOMERLIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.DELETECUSTOMER_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.DELETECUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                responseStatusCode: action.payload,
            }
        case types.DELETECUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.UPDATECUSTOMER_STARTED:
            return {
                ...state,
                loading: true
            }
        case types.UPDATECUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                responseStatusCode: action.payload,
            }
        case types.UPDATECUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
    }
    return state
}
