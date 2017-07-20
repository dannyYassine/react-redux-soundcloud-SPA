/**
 * Created by dannyyassine on 2017-07-14.
 */

import React from 'react';
import { connect } from 'react-redux';


class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            track: null,
            audio: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.track !== null) {

            if (this.state.audio) {
                this.state.audio.pause();
            }

            let audio = new Audio(`${nextProps.track.stream_url}?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U`);
            audio.play();
            this.setState({
                track: nextProps.track,
                audio: audio,
            });
        }
        if (this.props.track !== null) {
            if (nextProps.track.id !== this.state.track.id) {
                this.forceUpdate();
                console.log('force');
            }
        }
    };

    render() {

        if (this.props.player.track === null) {
            return(<div/>);
        }
        let track = this.props.player.track;
        return(
            <div>
                <p>{track.title}</p>
            </div>
        )
    }
}

Player.propTypes = {

};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, props) => {
    return {
        player: state.player,
        track: state.player.track
    }
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    null
)(Player);