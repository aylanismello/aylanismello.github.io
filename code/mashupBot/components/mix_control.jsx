import React from 'react';
import MetronomeContainer from './metronome_container';

const MixControl = ({handlePlayToggle, playing}) => {

	let playButton = playing ? "../images/pause.png" : "../images/play.png";

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
