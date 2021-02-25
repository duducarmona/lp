import './App.css';
import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Expedients from './components/Expedients';

class App extends PureComponent {
	render () {
    return (
      <div className="App">
        <Route exact path={'/'} component={Main} />
        <Route exact path={'/expedients'} component={Expedients} />
      </div>
    );
  }
}

export default App;
