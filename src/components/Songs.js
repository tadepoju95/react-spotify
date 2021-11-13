import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { spotifyClientCredentials, fetchSongs } from '../actions';
import { Card} from 'react-bootstrap'


const Songs = ({songs, credential, spotifyClientCredentials, fetchSongs}) => {

	useEffect(() => {
        if (!credential.access_token) {
        	spotifyClientCredentials();
        }

        	fetchSongs();

    }, [spotifyClientCredentials, credential.access_token, fetchSongs])


    const renderList = () => {
		return songs.map((eachSong, index) => {
			return (
					<Card key={index} className="song-list pe-auto" style={{ width: '15rem', height: '6rem' }} onClick={() => window.open(eachSong.external_urls.spotify, "_blank")}>
  						<Card.Body>{eachSong.name} - {eachSong.album.artists[0].name}</Card.Body>
					</Card>
			);
		});
	}

	return (
			<div>
				<div className={'d-flex justify-content-center flex-wrap'}>{renderList()}</div>
			</div>
		)
	
}

const mapStateToProps = state => {
	return { 
		songs: state.songs,
		credential: state.credential
	 };
}


export default connect(mapStateToProps, { spotifyClientCredentials, fetchSongs })(Songs);