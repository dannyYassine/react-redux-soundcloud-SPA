/**
 * Created by dannyyassine on 2017-07-16.
 */

export const trackActions = {
    FETCH_TRACK: 'FETCH_TRACK',


    fetchTrack: (track) => {
        return {
            type: trackActions.FETCH_TRACK,
            payload: {
                track: track
            }
        };
    }

};