/**
 * Created by dannyyassine on 2017-07-16.
 */

export const tracksActions = {
    FETCH_TRACKS: 'FETCH_TRACKS',
    FETCH_TRACKS_SUCCESS: 'FETCH_TRACKS_SUCCESS',
    FETCH_TRACKS_ERROR: 'FETCH_TRACKS_ERROR',
    ON_TRACK_SELECTED: 'ON_TRACK_SELECTED',

    fetchTracks: () => {
        return {
            type: tracksActions.FETCH_TRACKS
        }
    },

    fetchTracksSuccess: (tracks) => {
        return {
            type: tracksActions.FETCH_TRACKS_SUCCESS,
            payload: {
                isLoading: false,
                tracks: tracks
            }
        }
    },

    fetchTracksError: () => {
        return {
            type: tracksActions.FETCH_TRACKS_ERROR
        }
    },

    selectedTrack: (track) => {
        return {
            type: tracksActions.ON_TRACK_SELECTED,
            payload: {
                track: track
            }
        }
    }

};

export const getTracks = function() {
    return function (dispatch, getState) {
        return new Promise((resolve, reject) => {
            fetch('https://api.soundcloud.com/tracks?q=secret%20of%20mana&client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U').then((response) => {
                return response.json();
            }).then((json) => {
                dispatch(tracksActions.fetchTracksSuccess(json));
            }).catch(() => {
                dispatch(tracksActions.fetchTracksError());
            });
        });
    }
};