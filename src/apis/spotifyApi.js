import axios from 'axios';

export default axios.create({
	baseURL: 'https://accounts.spotify.com'
})