/**
 * Created by dannyyassine on 2017-07-14.
 */

import { tracksActions, trackActions } from './../../actions/tracks'
import { initialStore } from './../../store';

export function tracksReducer(state = initialStore.tracks, action) {
    let newState;
    switch (action.type) {
        case tracksActions.FETCH_TRACKS:
            newState = Object.assign({}, state);
            newState.isLoading = true;
            return newState;

        case tracksActions.FETCH_TRACKS_SUCCESS:
            console.log(action);
            newState = Object.assign({}, state);
            newState.isLoading = action.payload.isLoading;
            newState.tracks = action.payload.tracks;

            return newState;

        case tracksActions.FETCH_TRACKS_ERROR:
            return state;

        case tracksActions.ON_TRACK_SELECTED:
        case trackActions.FETCH_TRACK:
            newState = Object.assign({}, state);
            newState.selectedTrack = action.payload.track;
            return newState;

        default:
            return state;
    }
}
