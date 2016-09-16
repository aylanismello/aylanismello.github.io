import React from 'react';
import SoundWaveContainer from './sound_wave_container';
import ReactSlider from './react_slider';


const Channel = ({tracks, channelName, setChannelGain, defaultGain}) => {

		let tracksJSX = tracks.map((track, idx) => {
			return (
				<div key={idx} className="track">
					<SoundWaveContainer idx={idx}
						track={track}
						channelName={channelName}
						/>
				</div>
			);
		});

		return (
			<div className="channel">
			<h1 className="channel-name">
				{channelName}
			</h1>
				{tracksJSX}
				<ReactSlider setGain={setChannelGain}
				defaultGain={defaultGain}
				/>
			</div>
		);

};

export default Channel;
