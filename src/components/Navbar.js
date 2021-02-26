import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends PureComponent {
	render() {
		return (
			<div className="Navbar">
				<Link className='Navbar-Link' to="/">Home</Link>
				<Link className='Navbar-Link' to="/expedients">Expedients</Link>
				<Link className='Navbar-Link' to="/substitutes">Substitutes</Link>
			</div>
		);
	}
}

// Navbar.propTypes = {

// };

export default Navbar;
