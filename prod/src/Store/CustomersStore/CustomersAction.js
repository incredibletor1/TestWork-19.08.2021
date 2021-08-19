import { types } from './CustomersActionTypes'

export const addCustomerStarted = () => {
    return {
        type: types.ADDCUSTOMER_STARTED,
    }
}

export const addCustomerSuccess = (newStatus) => {
    return {
        type: types.ADDCUSTOMER_SUCCESS,
        payload: newStatus
    }
}

export const addCustomerFailure = (error) => {
    return {
        type: types.ADDCUSTOMER_FAILURE,
        payload: error
    }
}

export const showCustomerListStarted = () => {
    return {
        type: types.SHOWCUSTOMERLIST_STARTED,
    }
}

export const showCustomerListSuccess = (customerList) => {
    return {
        type: types.SHOWCUSTOMERLIST_SUCCESS,
        payload: customerList
    }
}

export const showCustomerListFailure = (error) => {
    return {
        type: types.SHOWCUSTOMERLIST_FAILURE,
        payload: error
    }
}

export const deleteCustomerStarted = () => {
    return {
        type: types.DELETECUSTOMER_STARTED,
    }
}

export const deleteCustomerSuccess = (newStatus) => {
    return {
        type: types.DELETECUSTOMER_SUCCESS,
        payload: newStatus
    }
}

export const deleteCustomerFailure = (error) => {
    return {
        type: types.DELETECUSTOMER_FAILURE,
        payload: error
    }
}

export const updateCustomerStarted = () => {
    return {
        type: types.UPDATECUSTOMER_STARTED,
    }
}

export const updateCustomerSuccess = (newStatus) => {
    return {
        type: types.UPDATECUSTOMER_SUCCESS,
        payload: newStatus
    }
}

export const updateCustomerFailure = (error) => {
    return {
        type: types.UPDATECUSTOMER_FAILURE,
        payload: error
    }
}