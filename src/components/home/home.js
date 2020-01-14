import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/home.css';
export default class Home extends Component {

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
                 <div id="box1" className="box blurred-bg tinted">
                    <div className="content">
                        <h1>TK Blog</h1>
                        <h2>By <a href="" rel="follow" target="_blank">kai</a></h2>
                        <p>Drag this box to move around</p>
                        <p className="related">Github: <a href="" target="_blank">aaaa</a></p>  
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

Home.propTypes = {
    increase: PropTypes.func,
    isLoading: PropTypes.bool
};