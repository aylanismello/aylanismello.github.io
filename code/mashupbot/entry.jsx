// import * as BONSAI from 'bonsai';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app_container';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const Root = ({store}) => (
	<Provider store={store}>
		<AppContainer/>
	</Provider>
);


document.addEventListener("DOMContentLoaded", () => {

	let store = configureStore();
	const root = document.querySelector('#root');
	ReactDOM.render(<Root store={store}/>, root);
});
