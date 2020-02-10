import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Blog extends Component {

    onChangeSearch = (e) => {
        e.preventDefault();
    }

    render() {
        const { isLoading } = this.props;
        return (
            <Fragment>

            </Fragment>
        )
    }
}

Blog.propTypes = {
    isLoading: PropTypes.bool
};