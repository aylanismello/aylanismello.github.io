import { combineReducers } from 'redux';
import TrackReducer from './track_reducer';
import PlayReducer from './play_reducer';
import ChannelReducer from './channel_reducer';
import MetronomeReducer from  './metronome_reducer';

const RootReducer = combineReducers({
	track: TrackReducer,
	play: PlayReducer,
	channel: ChannelReducer,
	metronome: MetronomeReducer
});

export default RootReducer;
