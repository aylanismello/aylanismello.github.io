// import * as BONSAI from 'bonsai';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store';
import { Provider } from 'react-redux';

const Root = ({store}) => (
	<Provider store={store}>
		<App/>
	</Provider>
);


document.addEventListener("DOMContentLoaded", () => {

	let store = configureStore();
	const root = document.querySelector('#root');
	ReactDOM.render(<Root store={store}/>, root);
});
