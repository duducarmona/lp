import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import apiClient from '../services/apiClient';
import Header from './Header';
import { calculateLocalDate } from '../common_functions/functions';

class Expedient extends PureComponent {
	state = {
		expedient: {},
	};

	componentDidMount() {
		this.loadExpedient();
	}

	loadExpedient = () => {
		const { id } = this.props.match.params;

		apiClient
			.getExpedient(id)
			.then(({ data }) => {
				this.setState({
					expedient: data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { resume, description, hearing_date, judicial_party, dificulty } = this.state.expedient;
		const date = new Date(hearing_date);

		return (
			<div className="Expedient">
				<Header />
				<div className="wrapper">
					<h1>Expedient:</h1>
					<h2>{resume}</h2>
					<p className="p-only-one-item">{description}</p>
					<p className="p-only-one-item">
						<b>Hearing date:</b> {calculateLocalDate(date)}
					</p>
					<p className="p-only-one-item">
						<b>Judicial party:</b> {judicial_party}
					</p>
					<p className="p-only-one-item">
						<b>Difficulty:</b> {dificulty}
					</p>
				</div>
			</div>
		);
	}
}

Expedient.propTypes = {
	match: PropTypes.object,
	params: PropTypes.object,
};

export default Expedient;
