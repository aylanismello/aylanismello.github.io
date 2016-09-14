import React from 'react';
import loader from 'webaudio-buffer-loader';

class Oscillator extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<canvas id={this.canvasId}></canvas>
		);
	}
}

export default Oscillator;
