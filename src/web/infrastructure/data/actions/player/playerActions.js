/**
 * Created by dannyyassine on 2017-07-16.
 */

export const playerActions = {
    PLAY_TRACK: 'PLAY_TRACK',
    STOP_TRACK: 'STOP_TRACK',

    playTrack: (track) => {
        return {
            type: playerActions.PLAY_TRACK,
            payload: {
                track: track
            }
        }
    },

    stopTrack: (track) => {
        return {
            type: playerActions.STOP_TRACK,
            payload: {
                track: track
            }
        }
    }
};
