import { Button, capitalize, ThemeProvider } from "@material-ui/core";
import { green, purple } from '@material-ui/core/colors';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from "react";
import { withFormik } from "formik";
import { loginUser } from "../Store/UserStore/UserThunks";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import { Redirect } from "react-router";


export class Login extends React.Component {
    render() {
        const {
            values,
            handleSubmit,
            handleChange,
        } = this.props
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <center>
                            <TextField
                                id="login"
                                label="Login"
                                variant="outlined"
                                name="login"
                                value={values.login}
                                onChange={handleChange}
                            />
                            <p></p>
                            <TextField
                                id="password"
                                label="Password"
                                type={values.showPassword ? 'text' : 'password'}
                                variant="outlined"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </center>
                        <p></p>
                    </div>
                    <div>
                        <ThemeProvider>
                            <center>
                                <Button color="primary" variant="contained" type="submit">
                                    Login
                                </Button>
                            </center>
                        </ThemeProvider>
                    </div>
                </form>
            </div>
        );
    }
}
const formikEnhancer = withFormik({
    mapPropsToValues: () => ({
        login: '',
        password: '',
        name: '',
        email: '',
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        const { loginUser } = props;
        const payload = {
            userName: values.login,
            password: values.password,
        }
        loginUser(payload)
    },
    displayName: 'Login',

})(Login);

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: bindActionCreators(loginUser, dispatch),
    }
}


const Redux = connect(mapStateToProps, mapDispatchToProps)(formikEnhancer)
export default Redux