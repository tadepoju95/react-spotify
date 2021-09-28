import { combineReducers } from 'redux';
import clientCredentialReducer from './clientCredentialReducer';


export default combineReducers({
	credential: clientCredentialReducer
});
