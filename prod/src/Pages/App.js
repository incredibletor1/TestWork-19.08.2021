import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Registration from './Registration';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Login from './Login';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import CustomersTable from './CustomersTable';


class App extends React.Component {
    render() {

        return (
            <div>
                <ul>
                    <li><Link to="/reg">Registration</Link></li>
                    <li><Link to="/log">Login</Link></li>
                    <li><Link to="/customers-table">Customers</Link></li>
                </ul>
                <Switch>
                    <Route path='/reg'>
                        <Registration />
                    </Route>
                    <Route path='/log'>
                        <Login />
                    </Route>
                    <Route path='/customers-table'>
                        <CustomersTable
                            addCustomer={this.props.addCustomer}
                            showCustomerList={this.props.showCustomerList}
                            deleteCustomer={this.props.deleteCustomer}
                            customerList={this.props.customersReducer.customerList}
                            updateCustomer={this.props.updateCustomer}
                        />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
        customersReducer: state.customersReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps)(App)