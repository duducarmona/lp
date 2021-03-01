import React, { PureComponent } from 'react';
import MenuButton from './MenuButton';
import './Header.css';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

class Header extends PureComponent {
	state = {
		open: false,
	};

	handleClick = () => {
		this.setState({
			open: !this.state.open,
		});
	};

	render() {
		const { open } = this.state;

		return (
			<div className="Header">
				<div className="arrow-icon-container hide-web">
					<i className="material-icons arrow-icon" onClick={this.props.history.goBack}>
						arrow_back_ios_new
					</i>
				</div>
				<div className="hide links-menu-web">
					<Link className="Header-Link" to="/">
						Home
					</Link>
					<Link className="Header-Link" to="/expedients">
						Expedients
					</Link>
					<Link className="Header-Link" to="/substitutes">
						Substitutes
					</Link>
				</div>
				<div className="hide-web">
					{open && <Navbar update={this.update} />}
					<MenuButton open={open} handleClick={this.handleClick} />
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	history: PropTypes.object,
	goBack: PropTypes.func,
	location: PropTypes.object,
};

export default withRouter(Header);
