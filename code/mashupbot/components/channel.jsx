import React from 'react';
import SoundCircle from './sound_circle';
import ReactSlider from './react_slider';


class Channel extends React.Component {

	constructor(props) {
		super(props);


		// props.setCanvas();
		this.subChannels = props.subChannels;
		this.state = {
			playingTrackIdx: 0
		};




	}

	selectTrack(trackIdx) {
		this.props.switchTrack(trackIdx);
		this.setState({playingTrackIdx: trackIdx});
	}






	render() {

		let subChannelsJSX = this.subChannels.map((subChannel, idx) => {
			let playing = (idx === this.state.playingTrackIdx) ? true : false;
			return (
				<div key={idx}>
				<SoundCircle idx={idx}
					selectTrack={this.selectTrack.bind(this)}
					playing={playing}
					setCanvas={this.props.setCanvas}
					/>
				</div>
			);
		});

		return (
			<div>
				{subChannelsJSX}
				<ReactSlider setGain={this.props.setChannelGain}/>
			</div>
		);
	}

}

export default Channel;
