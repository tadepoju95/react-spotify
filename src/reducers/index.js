import { combineReducers } from 'redux';
import clientCredentialReducer from './clientCredentialReducer';
import songsReducer from './songsReducer';


export default combineReducers({
	credential: clientCredentialReducer,
	songs: songsReducer
});
