import React from 'react';
import { connect } from 'react-redux';
import { FaSpotify } from 'react-icons/fa';
import { AiOutlineTrademarkCircle } from 'react-icons/ai'
import { fetchSongs } from '../actions';
import Songs from './Songs';


class Home extends React.Component {
	state = { term: "" };


	onSubmit = e => {
		e.preventDefault();
		this.props.fetchSongs(this.state.term)
		this.setState({ term: ""}) 
	};
    
    renderForm () {
		return (
			<form onSubmit={this.onSubmit}>
					<input
	          value={this.state.term} 
	          onChange={(e) => this.setState({ term: e.target.value })}
	          type="search" 
	          placeholder="Search songs" 
	          aria-label="Search" 
	        />
			</form>
		)
	}

	render() {
		return (
			<div>
				<div className="spotify-logo d-flex justify-content-between">
					<div className="logo"><FaSpotify className="blog-icon" />Spotify<AiOutlineTrademarkCircle className="trademark" /></div>
					<div className="d-flex justify-content-end form-input">{this.renderForm()}</div>
				</div>
				<hr />
				<Songs />
			</div>
		)
	}
}



export default connect(null, { fetchSongs })(Home);