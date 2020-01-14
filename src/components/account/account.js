import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../../styles/login.css'
import PropTypes from 'prop-types';

export default class Account extends Component {

    login = () => {
        this.props.login();
    }

    render() {
        const { isAuth } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        // if (isAuth) {
        //     return <Redirect to={from} />
        // }

        return (
            <div className="container-login">
                <input type="radio" name="formOption" id="loginChecked" />
                <input type="radio" name="formOption" id="signupChecked" defaultChecked />
                <div className="form-container">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    
                </div>
                <div className="signup">
                    <label className="btn-tg" htmlFor="signupChecked">
                        <span className="btn-front" >signup</span>
                    </label>
                    <div className="btn btn-primary">
                        Sign Up
                    </div>
                </div>
                <div className="login">
                    <label className="btn-tg" htmlFor="loginChecked">
                        <span className="btn-front">login</span>
                    </label>

                    <div  className="btn btn-secondary"  onClick={this.login}>
                        Login
                    </div>
                </div>
            </div>
        )
    }
}

Account.propTypes = {
    login: PropTypes.func,
    isAuth: PropTypes.bool
}