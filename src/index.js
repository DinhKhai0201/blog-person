
import React from 'react';
import { render } from 'react-dom';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from './routers';

import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import Header from './common/component/Header'
import Footer from './common/component/Footer'
import './styles/font-awesome.min.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		store.getState().account.isAuthenticated === true
			? <div className="wrapper" >
				{/* <Sidebar /> */}
				<Component {...props} />
			</div> :
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}} />
	)} />
)
const history = createBrowserHistory();

let showRoute =(routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
						<Route 
						key = {index}
						path= {route.path}
						exact= {route.exact}
						component={route.main} />
					)
			});
		}
		return result;
	}
render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Header />
			<Switch>
				{showRoute(routes)}
			</Switch>
			<Footer />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();