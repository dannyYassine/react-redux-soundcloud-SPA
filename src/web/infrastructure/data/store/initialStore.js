/**
 * Created by dannyyassine on 2017-07-16.
 */

export const initialStore = {
    tracks: {
        isLoading: false,
        tracks: [],
        selectedTrack: null
    },
    users: {
        users: [],
        selectedUser: null
    },
    auth_token: null,
    loggedInUser: {},
    currentTrack: null,
    player: {
        track: null,
        isPlaying: false,
        currentTime: 0
    }
};