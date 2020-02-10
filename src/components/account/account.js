import React, { Component, Fragment } from 'react'
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
            <Fragment className="login-register">
                <div className="bg"></div>
                <div className="panel">
                    <input type="radio" id="switch-open" name="switch" />
                    <input type="radio" id="switch-close" name="switch" />
                    <div className="login">
                        <h1>LOGIN</h1>
                        <div className="group">
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <input type="text" id="email" placeholder="E-Mail" />
                            <label htmlFor="email" />
                        </div>
                        <div className="group">
                            <i className="fa fa-unlock-alt" aria-hidden="true" />
                            <input type="password" id="password" placeholder="Password" />
                            <label htmlFor="password" />
                        </div>
                        <input type="submit" defaultValue="LOGIN" />
                    </div>
                    <div className="register">
                        <label className="button-open" htmlFor="switch-open" />
                        <label className="button-close" htmlFor="switch-close" />
                        <div className="inner">
                            <h1>REGISTER</h1>
                            <div className="group">
                                <i className="fa fa-user" aria-hidden="true" />
                                <input type="text" id="name" placeholder="Name" />
                                <label htmlFor="name" />
                            </div>
                            <div className="group">
                                <i className="fa fa-envelope" aria-hidden="true" />
                                <input type="text" id="email" placeholder="E-Mail" />
                                <label htmlFor="email" />
                            </div>
                            <div className="group">
                                <i className="fa fa-unlock-alt" aria-hidden="true" />
                                <input type="password" id="password" placeholder="Password" />
                                <label htmlFor="password" />
                            </div>
                            <input type="submit" defaultValue="REGISTER" />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

Account.propTypes = {
    login: PropTypes.func,
    isAuth: PropTypes.bool
}