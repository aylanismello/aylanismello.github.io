import { connect } from 'react-redux';
import App from './app';
import { togglePlay, start } from '../actions/play_actions';
import { setChannelsLoaded, initChannel } from '../actions/channel_actions';
import { tick } from '../actions/metronome_actions';

const mapStateToProps = (state, ownProps) => {


	return {
		selectedTracks: state.track.selectedTracks,
		channels: state.channel.channels,
		playing: state.play.playing,
		channelsLoaded: state.channel.loadedCount,
		started: state.play.started,
		beat: state.metronome.beat

	};
};

const mapDispatchToProps = dispatch => ({
	togglePlay: () => dispatch(togglePlay()),
	setChannelsLoaded: (count) => dispatch(setChannelsLoaded(count)),
	start: () => dispatch(start()),
	initChannel: (name, channel) => dispatch(initChannel(name, channel)),
	tick: (quantization) => dispatch(tick(quantization))
});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App);
