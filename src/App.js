import './App.css';
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Expedients from './components/Expedients';
import Substitutes from './components/Substitutes';
import Expedient from './components/Expedient';
import Substitute from './components/Substitute';

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path={'/'} component={Main} />
					<Route exact path={'/expedients'} component={Expedients} />
					<Route exact path={'/substitutes'} component={Substitutes} />
					<Route exact path={'/expedients/:id'} component={Expedient} />
					<Route exact path={'/substitutes/:id'} component={Substitute} />
				</Switch>
			</div>
		);
	}
}

export default App;
