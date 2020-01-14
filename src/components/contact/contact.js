import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/contact.css';

export default class Contact extends Component {

    render() {
        const { isLoading } = this.props;
        return (
            <Fragment>
                
            </Fragment>
        )
    }
}

Contact.propTypes = {
    isLoading: PropTypes.bool
};