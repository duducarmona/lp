import React, { PureComponent } from 'react';
import MenuButton from './MenuButton';
import './Header.css';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
				<div className="arrow-icon-container">
					<i className="material-icons arrow-icon" onClick={this.props.history.goBack}>
						arrow_back_ios_new
					</i>
				</div>
				{open && <Navbar update={this.update} />}
				<MenuButton open={open} handleClick={this.handleClick} />
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
