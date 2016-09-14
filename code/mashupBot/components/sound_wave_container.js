import { connect } from 'react-redux';
import SoundWave from './sound_wave';
import { selectTrack } from '../actions/track_actions';


const mapStateToProps = (state, ownProps) => ({
	selectedTracks: state.track.selectedTracks
});

const mapDispatchToProps = dispatch => ({
	selectTrack: (channel, idx) => dispatch(selectTrack(channel, idx))
});

export default connect (
	mapStateToProps,
	mapDispatchToProps
)(SoundWave);
