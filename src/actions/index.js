import axios from 'axios';



export const spotifyClientCredentials = () => dispatch => {
	axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + process.env.REACT_APP_CLIENT_ID_SECRET      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => { 
      dispatch({ type: 'SPOTIFY_CLIENT_CREDENTIALS', payload: tokenResponse.data});
    });
};


export const fetchSongs = (term = 'tems') => async (dispatch, getState) => {
	const { access_token } = getState().credential;
	const response = await axios.get('https://api.spotify.com/v1/search', {
			headers: {
       			'Content-Type' : 'application/x-www-form-urlencoded',
        		'Authorization' : 'Bearer ' + access_token    
      		},
			params: {
				q: term,
				type: 'track'
			}
		}
	)
	console.log("response", response.data.tracks.items)
	dispatch({ type: 'FETCH_SONGS', payload: response.data.tracks.items});
};
