import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';
import { Container, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';


class Songs extends React.Component {

	componentDidMount() {
		this.props.fetchSongs();
	}

	handleClick() {

	}
    
    renderList () {
		return this.props.songs.map((eachSong, index) => {
			return (
					<Card key={index} className="song-list pe-auto" style={{ width: '15rem', height: '6rem' }} onClick={() => window.open(eachSong.external_urls.spotify, "_blank")}>
  						<Card.Body>{eachSong.name} - {eachSong.album.artists[0].name}</Card.Body>
					</Card>
			);
		});
	}

	render() {
		console.log(this.props.songs);
		return (
			<div>
				<div className={'d-flex justify-content-center flex-wrap'}>{this.renderList()}</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { 
		songs: state.songs
	 };
}


export default connect(mapStateToProps, { fetchSongs })(Songs);