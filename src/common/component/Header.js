import React from 'react';
import { RemoveToken } from '../utilities/utilities';
import '../../styles/header.css'
import { BrowserRouter as Route, Link } from 'react-router-dom';

var logo = require('../../assert/common/logo.png');
var miniLogo = require('../../assert/common/minilogo.png');
var usFlag = require('../../assert/common/us.png');
var jpFlag = require('../../assert/common/jp.png');

class Header extends React.Component {

	logOut = () => {
		RemoveToken();
	}

	// pushMenu(e) {
	//     e.preventDefault();
	//     var body = document.body;
	//     if (window.innerWidth > 768) {
	//         if (body.className.indexOf('sidebar-collapse') === -1) {
	//             body.className += ' sidebar-collapse';
	//         } else {
	//             body.className = body.className.replace(' sidebar-collapse', '');
	//         }
	//     } else {
	//         if (body.className.indexOf('sidebar-open') === -1) {
	//             body.className += ' sidebar-open';
	//         } else {
	//             body.className = body.className.replace(' sidebar-open', '');
	//         }
	//     }
	// }

	render() {
		return (
			<header>
				<nav>
					<h1><Link to="/">Home</Link></h1>
					<ul className ="navbar-header">
						<li>
							<Link to="/post">Post</Link>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>

			</header>
		);
	}
}
export default Header;