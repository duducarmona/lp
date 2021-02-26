import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';
import Header from './Header';

class Expedients extends PureComponent {
	state = {
		expedients: [],
	};

	componentDidMount() {
		this.loadExpedients();
	}

	loadExpedients = () => {
		apiClient
			.getAllExpedients()
			.then(({ data }) => {
				this.setState({
					expedients: data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { expedients } = this.state;
		
		return (
			<div>
				<Header />
				<h1>EXPEDIENTS:</h1>
				<ul>
					{expedients.map((expedient, index) => {
						const { resume, dificulty, description, hearing_date, judicial_party } = expedient;

						return (
							<li key={index}>
								<h2>{resume}</h2>
								<p>Difficulty: {dificulty}</p>
								<p>{description}</p>
								<p>Hearing date: {hearing_date}</p>
								<p>Judicial party: {judicial_party}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Expedients;
