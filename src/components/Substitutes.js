import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';
import Header from './Header';
import { Link } from 'react-router-dom';

class Substitutes extends PureComponent {
	state = {
		substitutes: [],
	};

	componentDidMount() {
		this.loadSubstitutes();
	}

	loadSubstitutes = () => {
		apiClient
			.getAllSubstitutes()
			.then(({ data }) => {
				this.setState({
					substitutes: data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { substitutes } = this.state;

		return (
			<div>
				<Header />
				<div className="wrapper">
					<h1>Substitutes:</h1>
					<ul className="list-no-decoration">
						{substitutes.map((substitute, index) => {
							const { name, last_name, judicial_party, id } = substitute;

							return (
								<li key={index} className="App-item">
									<Link to={`/substitutes/${id}`}>
										<h2>
											{name} {last_name}
										</h2>
										<p>
											<b>Judicial parties:</b>
										</p>
										<ul className="jp-list">
											{judicial_party.map((city, index) => {
												return <li key={index}>{city}</li>;
											})}
										</ul>
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

Substitutes.propTypes = {};

export default Substitutes;
