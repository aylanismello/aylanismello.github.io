import { connect } from 'react-redux';
import MixControl from './mix_control';

const mapStateToProps = (state, ownProps) => ({
	playing: state.play.playing
});


export default connect(
	mapStateToProps
)(MixControl);
