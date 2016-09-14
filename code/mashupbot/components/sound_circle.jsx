import React from 'react';


class SoundCircle extends React.Component {

 constructor(props) {
	 super(props);
	 this.id = `${props.channelName}-${props.idx}`;


 }

 componentDidMount() {
	 this.props.setCanvas(this.id, this.props.idx);
 }

 render() {
	 let text = this.props.playing ? "ON" : "OFF";

		return (
			<div className="track-pic">
				<canvas className="sound-circle" id={this.id}
					onClick={this.props.selectTrack.bind(null, this.props.idx, this.id)}>
					{text}
				</canvas>
			</div>
		);
	}
}


export default SoundCircle;
