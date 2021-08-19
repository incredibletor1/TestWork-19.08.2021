import { Button, capitalize, ThemeProvider } from "@material-ui/core";
import { green, purple } from '@material-ui/core/colors';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from "react";
import { withFormik } from "formik";
import { registrationUser } from "../Store/UserStore/UserThunks";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"



export class Registration extends React.Component {


  render() {
    const {
      values,
      handleSubmit,
      handleChange,
    } = this.props
    return (

      <div>
        <h1>Registration</h1>
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
                id="email"
                label="Email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <p></p>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                value={values.name}
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
              <p></p>
            </center>
          </div>
          <div>
              <center>
                <Button color="primary" variant="contained" type="submit">
                  Registration
                </Button>
              </center>
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
    const { registrationUser } = props;
    const payload = {
      userName: values.login,
      password: values.password,
      name: values.name,
      email: values.email,
    }
    registrationUser(payload)
  },
  displayName: 'Registration',

})(Registration);

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registrationUser: bindActionCreators(registrationUser, dispatch),
  }
}


const Redux = connect(mapStateToProps, mapDispatchToProps)(formikEnhancer)
export default Redux
