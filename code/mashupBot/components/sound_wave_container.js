import { connect } from 'react-redux';
import SoundWave from './sound_wave';
// import { selectTrack } from '../actions/track_actions';
import { selectTrack } from '../actions/channel_actions';


const mapStateToProps = (state, ownProps) => {

	let loaded = state.channel.loadedCount === 3 ? true : false;

	return {
		selectedTracks: state.track.selectedTracks,
		playing: state.play.playing,
		channels: state.channel.channels,
		loaded
	};
};

const mapDispatchToProps = dispatch => ({
	selectTrack: (channel, idx) => dispatch(selectTrack(channel, idx))
});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(SoundWave);
