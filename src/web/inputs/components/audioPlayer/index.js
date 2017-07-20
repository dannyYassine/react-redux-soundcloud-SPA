/**
 * Created by dannyyassine on 2017-07-20.
 */

import React from 'react';
import {connect} from 'redux';
import PropTypes from 'prop-types';

class AudioPlayer extends React.Component {
    render() {
        return (
            <div>
                <ProgressBar/>
                <Button/>
                <Button/>
                <Button/>
                <TrackInfo/>
            </div>
        )
    }
};

AudioPlayer.propTypes = {

};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, props) => {
    return {
        currentTack: state.currentTrack,
        ...state.player
    }
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    null
)(AudioPlayer);



