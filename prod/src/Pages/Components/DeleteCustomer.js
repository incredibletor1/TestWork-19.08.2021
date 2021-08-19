import { Button, Input, makeStyles, TextField, withStyles } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { green, purple, red } from '@material-ui/core/colors';
import { withFormik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { deleteCustomer } from '../../Store/CustomersStore/CustomersThunks';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },


    },
    button: {
        margin: theme.spacing(2)
    }
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(red[400]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

function DeleteCustomer(props) {
    const classes = useStyles();
    const [id, setId] = useState(null)
    function handleSubmit(event) {
        event.preventDefault()
        const payload = {
            customerId : id,
        }
        props.deleteCustomer(payload)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.root}>
                <TextField
                    id="id"
                    name="id"
                    label="Id"
                    color="secondary"
                    onChange={(event) => setId(event.target.value)}
                />
                <Button
                    className={classes.button}
                    color='primary'
                    variant="contained"
                    type='submit'>
                    Save
                </Button>
            </div>
        </form>
    )
}

function DeleteCustomerButton(props) {

    const [isDelete, setUseDelete] = useState(false)

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
            fontSize: 15
        },

    }));

    const classes = useStyles();

    return (
        <text>
            <ColorButton onClick={() => { if (isDelete === true) {setUseDelete(false)} else {setUseDelete(true)} }} className={classes.margin} color='primary'>
                Delete
            </ColorButton>
            {isDelete ? <DeleteCustomer deleteCustomer={props.deleteCustomer}/> : null}
        </text>
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
        deleteCustomer: bindActionCreators(deleteCustomer, dispatch),
    }
}


const Redux = connect(mapStateToProps, mapDispatchToProps)(DeleteCustomerButton)
export default Redux