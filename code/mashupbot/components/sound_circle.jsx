import React from 'react';


class SoundCircle extends React.Component {


	 constructor(props) {
		 super(props);
		 this.id = `sound-circle-${this.props.idx}`;
	 }

	 componentDidMount() {
		 this.props.setCanvas(this.id, this.props.idx);
	 }

	 render() {

	 let text = this.props.playing ? "ON" : "OFF";


		return (
			<div className="track-pic">
				<canvas className="sound-circle" id={this.id}
					onClick={this.props.selectTrack.bind(null, this.props.idx)}>
					{text}
				</canvas>
			</div>
		);
	}
}


export default SoundCircle;
