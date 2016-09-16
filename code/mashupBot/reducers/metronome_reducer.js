import { MetronomeConstants } from '../actions/metronome_actions';
import * as _ from 'lodash';

const defaultMetronome = Object.freeze({
	beat: 4
});

const MetronomeReducer = (state=defaultMetronome, action) => {
	let newState;
	switch (action.type) {
		case MetronomeConstants.TICK:
			// debugger;
			// let newBeat = ((state.beat + 1) % action.quantization) + 1;
			let newBeat = (state.beat % action.quantization) + 1;
			return _.merge({}, state, {beat: newBeat});
		default:
			return state;
	}
};

export default MetronomeReducer;
