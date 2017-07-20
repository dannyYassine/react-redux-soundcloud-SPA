/**
 * Created by dannyyassine on 2017-07-16.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Track from './../track';

export default class TracksList extends React.Component {

    render() {

        let tracks = this.props.tracks.map((track, index) => (
            <Track key={index}
                   track={track}
                   onTrackClicked={this.props.onTrackClicked}
                   onTrackPlayClicked={this.props.onTrackPlayClicked}
            />
        ));

        return(
            <div>
                {tracks}
            </div>
        )
    }
}

TracksList.propTypes = {
    tracks: PropTypes.array,
    onTrackClicked: PropTypes.func.isRequired,
    onTrackPlayClicked: PropTypes.func.isRequired
};

