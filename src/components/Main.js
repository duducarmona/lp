import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
	return (
		<div>
			<div>
				<Link to="/expedients">EXPEDIENTS</Link>
			</div>
			<div>
				<Link to="/substitutes">SUBSTITUTES</Link>
			</div>
		</div>
	);
}

export default Main;
