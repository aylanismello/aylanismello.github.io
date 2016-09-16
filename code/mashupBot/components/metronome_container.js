import { connect } from 'react-redux';
import Metronome from './metronome';


const mapStateToProps = (state) => {

	let beat = (state.play.started ? state.metronome.beat : "!");

	return {
		beat
	};
};


export default connect(
	mapStateToProps
)(Metronome);
