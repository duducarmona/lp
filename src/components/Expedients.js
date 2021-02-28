import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';
import Header from './Header';
import { Link } from 'react-router-dom';
import { calculateLocalDate } from '../common_functions/functions';

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
				<div className="wrapper">
					<h1 className="Expedients-h1">Expedients:</h1>
					<ul className="list-no-decoration Expedients-ul">
						{expedients.map((expedient, index) => {
							const { resume, dificulty, hearing_date, judicial_party, id } = expedient;
							const date = new Date(hearing_date);

							return (
								<li key={index} className="App-item">
									<Link to={`/expedients/${id}`}>
										<h2>{resume}</h2>
										<p>
											<b>Hearing date:</b> {calculateLocalDate(date)}
										</p>
										<p>
											<b>Judicial party:</b> {judicial_party}
										</p>
										<p>
											<b>Difficulty:</b> {dificulty}
										</p>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Expedients;
