/**
 * Created by dannyyassine on 2017-07-16.
 */

export const playerActions = {
    PLAY_TRACK: 'PLAY_TRACK',

    playTrack: (track) => {
        return {
            type: playerActions.PLAY_TRACK,
            payload: {
                track: track
            }
        }
    }
};
