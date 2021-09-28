import spotifyApi from '../apis/spotifyApi';


export const spotifyClientCredentials = () => async dispatch => {
	const response = await spotifyApi.post(
		'/api/token', {
			params: {
				grant_type: "client_credentials"
			},
			headers: {
				"Authorization": "Basic NTdjNjQxNTIzYjg0NDAyMWEzZWNhYzM4ODc4OTcyMjI6ZTNiMmFmYmY0Mzc2NGE2M2IzMDhiYzVhYzJlNzMxMTI=",
				"Content-Type": "application/x-www-form-urlencoded"
			}
		}
	)
	dispatch({ type: 'SPOTIFY_CLIENT_CREDENTIALS', payload: response.data });
};
