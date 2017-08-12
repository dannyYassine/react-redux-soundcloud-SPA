/**
 * Created by dannyyassine on 2017-07-16.
 */

import { playerActions } from './../../actions/player'
import { initialStore } from './../../store';

export function playerReducer(state = initialStore.player, action) {
    let newState;
    switch (action.type) {
        case playerActions.PLAY_TRACK:
            newState = Object.assign({}, state);
            newState.track = action.payload.track;
            return newState;

        case playerActions.STOP_TRACK:
            newState = Object.assign({}, state);
            newState.track = null;
            return newState;

        default:
            return state;
    }
}
