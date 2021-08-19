import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import AddCustomerButton from './Components/AddCustomer';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { showCustomerList } from '../Store/CustomersStore/CustomersThunks';
import DeleteCustomerButton from './Components/DeleteCustomer'
import UpdateCustomerButton from './Components/UpdateCustomer'
import { Button } from '@material-ui/core';

const columns = [
    {
        field: 'id',
        headerName: 'id',
        width: 250,
        editable: false
    },
    {
        field: 'name',
        headerName: 'name',
        width: 400,
        editable: false
    },
    {
        field: 'position',
        headerName: 'position',
        width: 400,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'email',
        width: 400,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'age',
        width: 400,
        editable: true,
    },
];

function CustomersTable(props) {
    useEffect(() => {
        props.showCustomerList()
    }, [props.customerList]);
    
    return (
        <div>
            <div>
                <AddCustomerButton addCustomer={props.addCustomer}/>
                <DeleteCustomerButton deleteCustomer={props.deleteCustomer}/>
                <UpdateCustomerButton updateCustomer={props.updateCustomer}/>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.customerList}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
        customersReducer: state.customersReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showCustomerList: bindActionCreators(showCustomerList, dispatch),
    }
}


const Redux = connect(mapStateToProps, mapDispatchToProps)(CustomersTable)
export default Redux