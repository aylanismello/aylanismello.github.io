import { ChannelConstants } from '../actions/channel_actions';
import * as _ from 'lodash';

let defaultChannel = Object.freeze({
	loadedCount: 0,
	channels: {
		beat: {},
		acapella: {},
		melody: {}
	}
});

const ChannelReducer = (state=defaultChannel, action) => {
	let newState;

	switch (action.type) {
		case ChannelConstants.SET_LOADED_COUNT:
			newState = _.merge({}, state, {loadedCount: action.count});
			return newState;
		case ChannelConstants.INIT_CHANNEL:
			// debugger;
			console.log('sup');
			newState = _.merge({}, state);
			newState.channels[action.name] = action.channel;
			return newState;
		case ChannelConstants.REPLACE_TRACK:
			newState = _.merge({}, state);
			newState[action.channel].tracks[action.idx] = action.track;
			return newState;
		case ChannelConstants.SELECT_TRACK:
			newState = _.merge({}, state);
			newState.channels[action.channel].selectedTrack = action.idx;
			return newState;
		default:
			return state;
	}

};

export default ChannelReducer;
