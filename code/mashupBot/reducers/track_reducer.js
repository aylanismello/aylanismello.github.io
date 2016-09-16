import { TrackConstants } from '../actions/track_actions';
import * as _ from 'lodash';

let defaultTrack = Object.freeze({
	selectedTracks: {
	 	beat: 0,
		acapella: 0,
		melody: 0
	
	}
});

const TrackReducer = (state=defaultTrack, action) => {
	let newState;

	switch (action.type) {
		case TrackConstants.SELECT_TRACK:
			newState = _.merge({}, state);
			newState.selectedTracks[action.channel] = action.idx;
			return newState;
		default:
			return state;
	}

};

export default TrackReducer;
