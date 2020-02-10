import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/home.css';
export default class Home extends Component {

	onChangeSearch = (e) => {
		e.preventDefault();
	}
	render() {
		const { isLoading } = this.props;
		return (
			<Fragment>
				{/*/.home page*/}
				<div>
					<div className="section" id="work"><h1>New Post</h1><hr /></div>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="well">
									<a href=""><img src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="teamflightbasketball.com" height="150px" className="pull-left" style={{ paddingRight: '15px', paddingBottom: '10px', paddingTop: '20px' }} /></a>
									<h3>Team Flight Basketball</h3>
									<p>A website for the youth basketball organization, Team Flight Basketball</p>
									<div className="spacer" /><div className="spacer" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="well">
									<a href=""><img src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="teamflightbasketball.com" height="150px" className="pull-left" style={{ paddingRight: '15px', paddingBottom: '10px', paddingTop: '20px' }} /></a>
									<h3>Team Flight Basketball</h3>
									<p>A website for the youth basketball organization, Team Flight Basketball</p>
									<div className="spacer" /><div className="spacer" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="well">
									<a href=""><img src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="GivingShops.com" height="150px" className="pull-left" style={{ paddingRight: '15px', paddingBottom: '10px', paddingTop: '20px' }} /></a>
									<h3>GivingShops</h3>
									<p>An organization that aims to help people earn for their causes, just by shopping.</p>
									<div className="spacer" /><div className="spacer" />
								</div>
							</div>
						</div>{/*/.row*/}
					</div>{/*/.container*/}
				</div>

			</Fragment>
		)
	}
}

Home.propTypes = {
	isLoading: PropTypes.bool
};
