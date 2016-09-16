import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';

// const loggerMiddleware = createLogger();
// applyMiddleware(loggerMiddleware)


const configureStore = (preloadedState = {}) => (
	createStore(
		RootReducer,
		preloadedState
	)
);

export default configureStore;
