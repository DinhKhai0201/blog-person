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
		setTimeout(function(){window.location.reload(); }, 3000);
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
			renderAfterLogin = <li ><Link to="/" onClick ={this.logOut}> {infoLogin.result.tel}, logout</Link></li>
		} else {
			renderAfterLogin = <li> <Link to="/login">Login</Link></li>
		}
		if (categories && categories.length > 0) {
			cats = categories.map((value, key) => {
				return (
					<li key ={key}>
						<Link to={`/category/${value.slug}`}>{value.name}</Link>
					</li>
					);
			});
		}
		return (
			<header>
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

			</header>
		);
	}
}
export default Header;

Header.propTypes = {
	infoUser: PropTypes.func,
	categories: PropTypes.array,
	getCategory: PropTypes.func
}