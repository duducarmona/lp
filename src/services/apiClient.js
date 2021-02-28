import axios from 'axios';

class ApiClient {
	constructor() {
		this.apiClient = axios.create({
			baseURL: 'http://localhost:5000',
			withCredentials: true,
		});
	}

	getAllExpedients() {
		return this.apiClient.get('/expedients');
	}

	getAllSubstitutes() {
		return this.apiClient.get('/substitutes');
	}

	getExpedient(id) {
		return this.apiClient.get(`/expedients/${id}`);
	}
}

const apiClient = new ApiClient();
export default apiClient;
