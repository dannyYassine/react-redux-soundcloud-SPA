/**
 * Created by dannyyassine on 2017-07-14.
 */

import HomePage from './home'
import { connect } from 'react-redux';
import { tracksActions, getTracks, getSearchTracks } from './../../../infrastructure/data/actions/tracks';
import { playerActions } from './../../../infrastructure/data/actions/player';


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state) => {
    return {
        isLoading: state.tracks.isLoading,
        tracks: state.tracks.tracks,
        currentTrack: state.player.track
    };
};

const mapDispatchToProps = {
    getFeaturedTracks: getTracks,
    onSearchSubmit: getSearchTracks,
    loadFeaturedTracks: tracksActions.fetchTracks,
    fetchTracksSuccess: tracksActions.fetchTracksSuccess,
    fetchTracksError: tracksActions.fetchTracksError,
    selectedTrack: tracksActions.selectedTrack,
    playSelectedTrack: playerActions.playTrack
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);