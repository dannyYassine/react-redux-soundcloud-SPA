/**
 * Created by dannyyassine on 2017-07-20.
 */

import React from 'react';

import TracksList from './../../components/tracksList';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.queryString = "";
    }

    componentDidMount() {
        this.props.loadFeaturedTracks();
        this.props.getFeaturedTracks();
    }

    onTrackClicked(track) {
        this.props.selectedTrack(track);
        this.props.history.push(`/tracks/${track.id}`);
    };

    onTrackPlayClicked(track) {
        this.props.playSelectedTrack(track);
    };

    onSubmitSearch(e) {
        e.preventDefault();
        if (this.queryString === "") { return; }

        this.props.onSearchSubmit(this.queryString);
        this.props.loadFeaturedTracks();
    };

    onSearchInputChanged(e) {
        this.queryString = e.target.value;
    };

    player() {
        return (
            <div>
                {this.props.currentTrack.title}
            </div>
        );
    }

    render() {

        return(
            <div>
                <br/>
                <form  onSubmit={this.onSubmitSearch.bind(this)}>
                    <input type="text" placeholder="search tracks" onChange={this.onSearchInputChanged.bind(this)}/>
                </form>

                <div>
                    {this.props.isLoading ? <h1>LOADING</h1> : null}
                </div>
                <h1>Tracks</h1>
                <TracksList
                    tracks={this.props.tracks}
                    onTrackClicked={this.onTrackClicked.bind(this)}
                    onTrackPlayClicked={this.onTrackPlayClicked.bind(this)}
                />
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;