/**
 * Created by dannyyassine on 2017-07-20.
 */

import React from 'react';
import {connect} from 'redux';
import PropTypes from 'prop-types';

export default class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            willDisappear: false
        };
    }

    onProgressMouseDown(evt) {
        var e = evt.target;
        var dim = e.getBoundingClientRect();
        var x = evt.clientX - dim.left;
        // var y = evt.clientY - dim.top;
        this.props.onSeekedAtPosition(x/dim.width);
    };

    onDisappear() {
        console.log(this.state.willDisappear);
        return this.state.willDisappear ? "player-animate-out" : "player-animate-in";
    }

    onStopClicked() {
        this.setState({
            willDisappear: true
        });
        setTimeout(() => {
            this.props.onStopClicked();
        }, 750);
    }

    render() {
        const { track, currentTime, duration } = this.props;

        return (
            <div id="player" className={this.onDisappear()}>
                <p>{track.title}</p>
                <img
                    src={track.artwork_url}
                    width="40"
                    height="40"
                />
                <progress id="seekbar" value={currentTime / duration} max="1" width={400} onClick={this.onProgressMouseDown.bind(this)}/>
                <h6 className="player-button">{`${currentTime} : ${duration}`}</h6>

                <div className="player-button" onClick={this.props.onPlayClicked}>PLAY</div>
                <div className="player-button" onClick={this.props.onPauseClicked}>PAUSE</div>
                <div className="player-button" onClick={this.onStopClicked.bind(this)}>STOP</div>

                {/*<ProgressBar/>*/}
                {/*<Button/>*/}
                {/*<Button/>*/}
                {/*<Button/>*/}
            </div>
        );
    }
};

AudioPlayer.propTypes = {
    track: PropTypes.object.isRequired,
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    onPlayClicked: PropTypes.func.isRequired,
    onPauseClicked: PropTypes.func.isRequired,
    onStopClicked: PropTypes.func.isRequired
};




