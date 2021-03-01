import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import apiClient from '../services/apiClient';
import Header from './Header';
import './Substitute.css';

class Substitute extends PureComponent {
	state = {
		substitute: {},
	};

	componentDidMount() {
		this.loadSubstitute();
	}

	loadSubstitute = () => {
		const { id } = this.props.match.params;

		apiClient
			.getSubstitute(id)
			.then(({ data }) => {
				this.setState({
					substitute: data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { name, last_name, image, phone, judicial_party } = this.state.substitute;

		return (
			<div>
				<Header />
				<div className="wrapper">
					<h1>Substitute:</h1>
					<h2>
						{name} {last_name}
					</h2>
					<img src={image + '' + new Date().getTime()} alt={`${name} ${last_name} photo`} className="Substitute-img" />
					<p className="p-only-one-item">
						<b>Phone:</b> {phone}
					</p>
					<p className="p-only-one-item">
						<b>Judicial parties:</b>
					</p>
					{judicial_party && (
						<ul className="jp-list">
							{judicial_party.map((city, index) => {
								return (
									<li key={index} className="p-only-one-item">
										{city}
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		);
	}
}

Substitute.propTypes = {
	match: PropTypes.object,
	params: PropTypes.object,
};

export default Substitute;
