import React from 'react';
import { RemoveToken } from '../utilities/utilities';
import '../../styles/header.css'
import { BrowserRouter as Route, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GetToken } from '../utilities/utilities';


class Header extends React.Component {

	componentDidMount() {
		if (GetToken() !== false) {
			this.props.infoUser(GetToken().accesstoken);
		}
		this.props.getCategory();
	}
	logOut = () => {
		RemoveToken();
		setTimeout(function () { window.location.reload(); }, 3000);
	}

	pushMenu(e) {
		e.preventDefault();
		var body = document.body;
		if (window.innerWidth > 768) {
			if (body.className.indexOf('sidebar-collapse') === -1) {
				body.className += ' sidebar-collapse';
			} else {
				body.className = body.className.replace(' sidebar-collapse', '');
			}
		} else {
			if (body.className.indexOf('sidebar-open') === -1) {
				body.className += ' sidebar-open';
			} else {
				body.className = body.className.replace(' sidebar-open', '');
			}
		}
	}

	render() {
		let { infoLogin, categories } = this.props;
		// console.log("cat",categories);

		let renderAfterLogin, cats;
		if (infoLogin && infoLogin.result && infoLogin.result.success == true) {
			renderAfterLogin = <li ><Link to="/" onClick={this.logOut}> {infoLogin.result.tel}, logout</Link></li>
		} else {
			renderAfterLogin = <li> <Link to="/login">Login</Link></li>
		}
		if (categories && categories.length > 0) {
			cats = categories.map((value, key) => {
				return (
					<li key={key}>
						<Link to={`/category/${value.slug}`}>{value.name}</Link>
					</li>
				);
			});
		}
		return (
			<header className ="navbarscroll">
				<nav>
					<h1><Link to="/">KBlog</Link></h1>
					<ul className ="navbar-header">
						{cats}
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						{renderAfterLogin}
					</ul>
				</nav>

			// </header>
			// <header className="navbarscroll">
			// 	<div className="navbar pull-right" role="navigation" id="header">
			// 		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
			// 			<span className="sr-only">Toggle dropdown</span>
			// 			<span className="fa fa-bars"></span>
			// 			<span className="fa fa-bars"></span>
			// 			<span className="fa fa-bars"></span>
			// 		</button>
			// 		<div id="logos">
			// 			<a className="navbar-brand" href="#presentation"><img id="logo" src="http://pre08.deviantart.net/d102/th/pre/f/2014/248/1/a/laurel_leaves_hq_by_macgalope11-d7y08ss.png" width="45" alt="Laurel Crown Logo" title="" />
			// 				<p id="logoname">Thenri</p>
			// 			</a>
			// 		</div>
			// 		<nav>
			// 			<div className="collapse navbar-collapse nav-collapse navbar-responsive-collapse" id="nav">
			// 				<ul className="nav navbar-right">
			// 					<li><a href="#presentation">About</a></li>
			// 					<li><a href="#projects">Projects</a></li>
			// 					<li><a href="#testemonials">Testemonials</a></li>
			// 					<li><a href="#contact">Contact</a></li>
			// 				</ul>
			// 			</div>
			// 		</nav>
			// 	</div>
			// </header>
		);
	}
}
export default Header;

Header.propTypes = {
	infoUser: PropTypes.func,
	categories: PropTypes.array,
	getCategory: PropTypes.func
}