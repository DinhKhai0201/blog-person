import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Category extends Component {

    render() {
        const { isLoading } = this.props;
        return (
            <Fragment>
                
            </Fragment>
        )
    }
}

Category.propTypes = {
    isLoading: PropTypes.bool
};