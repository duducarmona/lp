import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

class Main extends PureComponent {
	render() {
		return (
			<div className="Main">
				<h1 className="Main-h1 Main-h1-web">Welcome to the app Expedients & Substitutes</h1>
				<div className='Main-buttons-container'>
					<div>
						<Link to="/expedients">
							<i className="material-icons Main-icons">library_books</i>
						</Link>
					</div>
					<div>
						<Link to="/substitutes">
							<i className="material-icons Main-icons">group</i>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
