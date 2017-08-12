/**
 * Created by dannyyassine on 2017-07-16.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { trackActions } from './../../../infrastructure/data/actions/tracks';

class TrackDetail extends React.Component {

    componentDidMount() {
        if (this.props.track === null) {
            this.props.getTrackWithId(`${this.props.match.params.track_id}`).then((track) => {
                this.props.fetchTrack(track);
            });
        }
    }

    render() {

        if (this.props.track === null) {
            return(<div/>)
        }
        return(
            <div>
                <p>{this.props.track.title}</p>
                <img src={this.props.track.artwork_url}/>
            </div>
        );
    }
}

TrackDetail.propTypes = {
    track: PropTypes.object,
    getTrackWithId: PropTypes.func
};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, props) => {
    return {
        track: state.tracks.selectedTrack
    };
};

const mapDispatchToProps = {
    fetchTrack: trackActions.fetchTrack
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetail);
