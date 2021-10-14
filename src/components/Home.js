import React from 'react';
import { connect } from 'react-redux';
import { FaSpotify, FaSearch } from 'react-icons/fa';
import { AiOutlineTrademarkCircle } from 'react-icons/ai'
import { spotifyClientCredentials, fetchSongs } from '../actions';
import Songs from './Songs';



class Home extends React.Component {
	state = { displayInput: false, term: "" };

	componentDidMount() {
		this.props.spotifyClientCredentials();
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.fetchSongs(this.state.term)
		this.setState({ term: ""}) 
	};
    
    renderForm () {
		return (
			<form style={{marginTop:5,marginLeft:20}} onSubmit={this.onSubmit}>
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
		console.log(this.props.fetchSongs);
		return (
			<div>
				<div className="spotify-logo">
					<div className="logo"><FaSpotify className="blog-icon" />Spotify<AiOutlineTrademarkCircle className="trademark" /></div>
					<div className="d-flex justify-content-end">
						<FaSearch style={{marginTop:-30,marginLeft:20}} onClick={() => this.setState({ displayInput: !this.state.displayInput })} />
						{this.state.displayInput && this.renderForm()}
					</div>
					<hr />
				</div>
				<Songs />
			</div>
		)
	}
}



export default connect(null, {spotifyClientCredentials, fetchSongs })(Home);