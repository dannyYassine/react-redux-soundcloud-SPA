/**
 * Created by dannyyassine on 2017-07-14.
 */

import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from './../../components/audioPlayer';
import { playerActions } from './../../../infrastructure/data/actions/player'

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            track: null,
            currentTime: 0,
            duration: 0
        };
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.track === null) {
            return;
        }

        if (nextProps.track !== null) {


            if (this.audio) {
                this.audio.pause();
            }

            this.audio = new Audio(`${nextProps.track.stream_url}?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U`);

            this.audio.play();
            this.setState({
                track: nextProps.track
            });
            this.audio.addEventListener('timeupdate', () => {
                this.setState({
                    currentTime: this.audio.currentTime,
                    duration: this.audio.duration
                });
            });
        }

        if (this.props.track !== null) {
            if (nextProps.track.id !== this.state.track.id) {
                this.forceUpdate();
            }
        }
    };

    onPlayClicked(e) {
        this.audio.play();
    }

    onPauseClicked(e) {
        this.audio.pause();
    }

    onStopClicked(e){
        let track = this.props.player.track;
        this.audio.pause();
        this.props.stopTrack(track);
    }

    onSeekedAtPosition(position) {
      this.audio.currentTime = position * this.audio.duration;
    };

    render() {

        if (this.props.player.track === null) {
            return(<div/>);
        }
        let track = this.props.player.track;
        return(
            <div>
                <AudioPlayer
                    track={track}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    onPlayClicked={this.onPlayClicked.bind(this)}
                    onPauseClicked={this.onPauseClicked.bind(this)}
                    onStopClicked={this.onStopClicked.bind(this)}
                    onSeekedAtPosition={this.onSeekedAtPosition.bind(this)}
                />
            </div>
        )
    }
}

Player.propTypes = {

};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state) => {
    return {
        player: state.player,
        track: state.player.track
    };
};

const mapDispatchToProps = {
    stopTrack: playerActions.stopTrack
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);