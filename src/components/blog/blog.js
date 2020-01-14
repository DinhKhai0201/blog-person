import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Blog extends Component {

    increaseNumber() {
        this.props.increase(this.props.countNumber);
    }

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
    increase: PropTypes.func,
    isLoading: PropTypes.bool
};