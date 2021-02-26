import React, { PureComponent } from 'react';
import apiClient from '../services/apiClient';

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
				console.log('substitutes: ', data);
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
				<h1>SUBSTITUTES:</h1>
				<ul>
					{substitutes.map((substitute, index) => {
            const { name, last_name, phone, image, id } = substitute;
            
						return (
							<li key={index}>
								<h2>
									{name} {last_name}
								</h2>
								<p>Phone: {phone}</p>
								<img src={image} alt={`substitute ${id}`}></img>
								{/* METER AQUÍ IMAGEN
                METER AQUÍ LISTADO DE judicial_party */}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

Substitutes.propTypes = {};

export default Substitutes;
