import { Button, Input, makeStyles, TextField, withStyles } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { green, purple, red, yellow } from '@material-ui/core/colors';
import { withFormik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { updateCustomer } from '../../Store/CustomersStore/CustomersThunks';


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
        color: theme.palette.getContrastText(yellow[400]),
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
}))(Button);

function UpdateCustomer(props) {
    const classes = useStyles();
    const [position, setPosition] = useState(null)
    const [age, setAge] = useState(null)
    const [email, setEmail] = useState(null)
    const [id, setId] = useState(null)
    function handleSubmit(event) {
        event.preventDefault()
        const payload = {
            id : id,
            email: email,
            age: age,
            position: position,
        }
        props.updateCustomer(payload)
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

function UpdateCustomerButton(props) {

    const [isUpdate, setUseUpdate] = useState(false)

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
            fontSize: 15
        },

    }));

    const classes = useStyles();

    return (
        <text>
            <ColorButton onClick={() => { if (isUpdate === true) {setUseUpdate(false)} else {setUseUpdate(true)} }} className={classes.margin} color='primary'>
                Update
            </ColorButton>
            {isUpdate ? <UpdateCustomer updateCustomer={props.updateCustomer}/> : null}
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
        updateCustomer: bindActionCreators(updateCustomer, dispatch),
    }
}


const Redux = connect(mapStateToProps, mapDispatchToProps)(UpdateCustomerButton)
export default Redux