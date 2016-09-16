import { PlayConstants } from '../actions/play_actions';

import * as _ from 'lodash';

let defaultPlay = Object.freeze({
	playing: false,
	started: false
});

const PlayReducer = (state=defaultPlay, action) => {
	let newState;

	switch (action.type) {
		case PlayConstants.TOGGLE_PLAY:
			newState = _.merge({}, state, {playing: !state.playing});
			return newState;
			// newState.selectedTracks[action.channel] = action.idx;
			// return newState;
		case PlayConstants.START:
			return _.merge({}, state, {started: true});
		default:
			return state;
	}

};

export default PlayReducer;
