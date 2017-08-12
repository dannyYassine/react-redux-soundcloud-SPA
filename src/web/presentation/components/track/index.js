/**
 * Created by dannyyassine on 2017-07-20.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Track = props => {
    return(
        <div>
            <p>{props.track.title}</p>
            <img
                src={props.track.artwork_url}
                width="100"
                height="100"
                onClick={ (e) => props.onTrackClicked(props.track)}
            />
            <div
                onClick={ (e) => props.onTrackPlayClicked(props.track)}>
                <h4>PLAY</h4>
            </div>
        </div>
    );
};

Track.propTypes = {
    track: PropTypes.object.isRequired,
    onTrackClicked: PropTypes.func.isRequired,
    onTrackPlayClicked: PropTypes.func.isRequired
};

export default Track;