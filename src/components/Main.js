import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
	return (
		<div className='Main'>
			<h1 className='Main-h1'>Welcome to the app Expedients & Substitutes</h1>
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
	);
}

export default Main;
