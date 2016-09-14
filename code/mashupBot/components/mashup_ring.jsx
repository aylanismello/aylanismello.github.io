import React from 'react';

class MashupRing extends React.Component {
	componentDidMount() {
		this.props.setCanvas(this.props.canvasId);
	}

	render() {
		return (
			<canvas className="fft" id={this.props.canvasId}></canvas>
		);
	}
}


export default MashupRing;
