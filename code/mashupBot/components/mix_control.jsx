import React from 'react';
import MetronomeContainer from './metronome_container';

const MixControl = ({handlePlayToggle, playing}) => {

	let playButton = playing ? "http://res.cloudinary.com/dfkrjl3pb/image/upload/v1474011907/pause_unhu3e.png" : "http://res.cloudinary.com/dfkrjl3pb/image/upload/v1474011907/play_k7rvet.png";

	return (
		<div className="mix-control-container">
			<div className="metronome-container">
				<MetronomeContainer/>
			</div>
			<div className="play-button">
				<img src={playButton} onClick={handlePlayToggle}/>
			</div>


		</div>
	);

};


export default MixControl;
