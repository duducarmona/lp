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
}

const apiClient = new ApiClient();
export default apiClient;
