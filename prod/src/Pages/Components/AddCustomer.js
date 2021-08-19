import { Button, Input, makeStyles, TextField, withStyles } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { green, purple } from '@material-ui/core/colors';
import { withFormik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { addCustomer } from '../../Store/CustomersStore/CustomersThunks';


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
        color: theme.palette.getContrastText(green[400]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

function AddCustomer(props) {
    const classes = useStyles();
    const [name, setName] = useState(null)
    const [position, setPosition] = useState(null)
    const [age, setAge] = useState(null)
    const [email, setEmail] = useState(null)
    function handleSubmit(event) {
        event.preventDefault()
        const payload = {
            name : name,
            position : position,
            age: age,
            email: email,
        }
        props.addCustomer(payload)
    }


    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.root}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    color="secondary"
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    id="position"
                    name="position"
                    label="Position"
                    color="secondary"
                    onChange={(event) => setPosition(event.target.value)}
                />
                <TextField
                    id="age"
                    name="age"
                    label="Age"
                    color="secondary"
                    onChange={(event) => setAge(event.target.value)}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    color="secondary"
                    onChange={(event) => setEmail(event.target.value)}
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

function AddCustomerButton(props) {

    const [isAdd, setUseAdd] = useState(false)

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
            fontSize: 15
        },
    }));

    const classes = useStyles();

    return (
        <text>
            <ColorButton onClick={() => { if (isAdd === true) {setUseAdd(false)} else {setUseAdd(true)} }} className={classes.margin} color='primary'>
                Add
            </ColorButton>
            {isAdd ? <AddCustomer addCustomer={props.addCustomer}/> : null}
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
        addCustomer: bindActionCreators(addCustomer, dispatch),
    }
}


const Redux = connect(mapStateToProps, mapDispatchToProps)(AddCustomerButton)
export default Redux