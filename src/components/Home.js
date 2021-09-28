import React from 'react';
import { connect } from 'react-redux';
import { FaSpotify } from 'react-icons/fa';
import { AiOutlineTrademarkCircle } from 'react-icons/ai'
import { spotifyClientCredentials } from '../actions';





class Home extends React.Component {

	handleFormSubmit = () => {
		this.props.spotifyClientCredentials();
	};

	render() {
		return (
			<div className="text-center logo-button">
				<div className="d-flex justify-content-center logo"><FaSpotify className="blog-icon" />Spotify<AiOutlineTrademarkCircle className="trademark" /></div>
				<button type="button" className="btn btn-lg" onClick={() => this.handleFormSubmit()}>LOG IN</button>
			</div>
		)
	}
}



export default connect(null, {spotifyClientCredentials})(Home);