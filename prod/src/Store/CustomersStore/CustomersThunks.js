import { customerAxios } from './CustomersService';
import { addCustomerFailure, addCustomerStarted, addCustomerSuccess, showCustomerListFailure, showCustomerListStarted, showCustomerListSuccess, deleteCustomerFailure, deleteCustomerStarted, deleteCustomerSuccess, updateCustomerFailure, updateCustomerStarted, updateCustomerSuccess } from './CustomersAction';


export const addCustomer = (data) => {
    return dispatch => {
        dispatch(addCustomerStarted());

        customerAxios({
            url: 'AddCustomer',
            method: "POST",
            data: data
        })
            .then((res) => {
                console.log("test")
                dispatch(addCustomerSuccess(res.status))
            })
            .catch((err) => {
                dispatch(addCustomerFailure(err.message));
            })
    };
};

export const showCustomerList = () => {
    return dispatch => {
        dispatch(showCustomerListStarted());

        customerAxios({
            url: 'ShowCustomerList',
            method: "GET",
        
        })
            .then((res) => {
                dispatch(showCustomerListSuccess(res.data))
            })
            .catch((err) => {
                dispatch(showCustomerListFailure(err.message));
            })
    };
};


export const deleteCustomer = (data) => {
    return dispatch => {
        dispatch(deleteCustomerStarted());

        customerAxios({
            url: 'DeleteCustomer',
            method: "DELETE",
            params: { customerId: data.customerId }
        })
            .then((res) => {
                console.log(res.data)
                dispatch(deleteCustomerSuccess(res.data))
            })
            .catch((err) => {
                dispatch(deleteCustomerFailure(err.message));
            })
    };
};

export const updateCustomer = (data) => {
    return dispatch => {
        dispatch(updateCustomerStarted());

        customerAxios({
            url: 'UpdateCustomer',
            method: "PUT",
            data: data
        })
            .then((res) => {
                console.log(res.data)
                dispatch(updateCustomerSuccess(res.data))
            })
            .catch((err) => {
                dispatch(updateCustomerFailure(err.message));
            })
    };
};

