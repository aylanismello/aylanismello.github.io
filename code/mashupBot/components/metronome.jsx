import React from 'react';


const Metronome = ({beat}) => (
	<div className="metronome">
		<h1 className="metronome-beat">
			{beat}
		</h1>
	</div>
);

export default Metronome;
