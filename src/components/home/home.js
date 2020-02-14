import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/home.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Home extends Component {
	constructor(props) {
        super(props);
        this.state = { 
          	
        };
    }
    componentDidMount(){
		this.props.renderPost();
		this.props.getCategory();
	}
	onChangeSearch = (e) => {
		e.preventDefault();
	}
	onIncreaseView =(id, view) => {
		this.props.increaseView(id, view);
	}
	render() {
		const { isLoading, posts, categories } = this.props;
		console.log("cat",categories);
		let allPost =[];
		if (posts.length > 0){
			allPost = posts.map((value, key) => {
				return (
						<div className="col-md-6" key ={key}>
								<div className="well" >
									<Link to={`post/${value.slug}-${value._id}`}><img src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="teamflightbasketball.com" height="150px" className="pull-left" style={{ paddingRight: '15px', paddingBottom: '10px', paddingTop: '20px' }} onClick ={()=>this.onIncreaseView(value._id, parseInt(value.view) + 1)}/></Link>
									<h3>{value.title}</h3>
									<p>{value.content}</p>
									<div className="spacer" /><div className="spacer" />
								</div>
							</div>
					);
			});
		}
		return (
			<Fragment>
				<div>
					<div className="section" id="work"><h1>New Post</h1><hr /></div>
					<div className="container">
						<div className="row">
							{allPost}
						</div>{/*/.row*/}
					</div>{/*/.container*/}
					<div className="section" id="work"><h1>Post 2020</h1><hr /></div>
					<div className="container">
						<div className="row">
							{allPost}
						</div>{/*/.row*/}
					</div>{/*/.container*/}
					<div className="section" id="work"><h1>Post 2019</h1><hr /></div>
					<div className="container"></div>
				</div>

			</Fragment>
		)
	}
}

Home.propTypes = {
	isLoading: PropTypes.bool,
	posts: PropTypes.array,
	categories: PropTypes.array,
	increaseView: PropTypes.func,
	getCategory: PropTypes.func
}