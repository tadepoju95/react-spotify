export default (state = {}, action) => {
	switch (action.type) {
		case 'SPOTIFY_CLIENT_CREDENTIALS': 
			return [...action.payload];
		default:
			return state;
	}
};