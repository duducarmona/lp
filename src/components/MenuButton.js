import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MenuButton.css';

class MenuButton extends PureComponent {
	render() {
		const { open, handleClick } = this.props;

		return !open ? (
			<div className="MenuButton" onClick={handleClick}>
				<i className="material-icons MenuButton-icons">menu</i>
			</div>
		) : (
			<div className="MenuButton" onClick={handleClick}>
				<i className="material-icons MenuButton-icons">close</i>
			</div>
		);
	}
}

MenuButton.propTypes = {
	open: PropTypes.bool,
	handleClick: PropTypes.func,
};

export default MenuButton;
