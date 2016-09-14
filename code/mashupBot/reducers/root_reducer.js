import { combineReducers } from 'redux';
import TrackReducer from './track_reducer';

const RootReducer = combineReducers({
	track: TrackReducer
});

export default RootReducer;
