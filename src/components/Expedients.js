import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';

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
				<h1>EXPEDIENTS:</h1>
				<ul>
					{expedients.map((expedient, index) => {
						return (
							<li key={index}>
								<h2>{expedient.resume}</h2>
								<p>Difficulty: {expedient.dificulty}</p>
								<p>{expedient.description}</p>
								<p>Hearing date: {expedient.hearing_date}</p>
								<p>Judicial party: {expedient.judicial_party}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Expedients;
