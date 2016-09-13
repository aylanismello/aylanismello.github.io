import React from 'react';
import loader  from 'webaudio-buffer-loader';
import Slider from './slider';
import ReactSlider from './react_slider';
import ProgressCircle from './progress_circle';
import WebAudioScheduler from 'web-audio-scheduler';

const path = './stems';
const beatsPath = './stems/beats';

const TimeSlices = {
	FOUR: 4,
	EIGHT: 8,
	SIXTEEN: 16,
	THIRTYTWO: 32
};

const bpm = 160;
const TIME_SLICE = 32;
// const timeSlice = TimeSlices.THIRTYTWO;

class Root extends React.Component {

	constructor(props) {

		super(props);

		debugger;


		this.state = {
			note: 0,
			loaded: false,
			playing: false
		};

		let canvas = document.querySelector("#can");
		let ctx = canvas.getContext("2d");
		ctx.lineWidth = 15;
		ctx.strokeStyle = "#59b2a1";
		let max = 2 * Math.PI;

		this.circle = {
			canvas,
			ctx,
			max
		};

		this.drawAtRad = this.drawAtRad.bind(this);
		this.createAudioPipeline = this.createAudioPipeline.bind(this);
		this.contxt = new AudioContext();

		this.masterGain = this.contxt.createGain();
		this.masterGain.connect(this.contxt.destination);

	  this.sched = new WebAudioScheduler({ context: this.contxt });
		this.channels = [];
		this.startMetronome = this.startMetronome.bind(this);
		this.metronome = this.metronome.bind(this);
		this.handleUser = this.handleUser.bind(this);
		this.tick = this.tick.bind(this);
		this.stopMetronome = this.stopMetronome.bind(this);
		this.setMasterGain = this.setMasterGain.bind(this);
		this.switchTrack = this.switchTrack.bind(this);

		this.createAudioPipeline();



	}




	drawAtRad(startingRadian, strokeLength, restart=false) {

		if(restart){
			this.circle.ctx.clearRect(0, 0, this.circle.canvas.width, this.circle.canvas.height);
		}
		this.circle.ctx.beginPath();
		this.circle.ctx.arc(75, 75, 50, startingRadian, startingRadian + strokeLength);
		this.circle.ctx.fillStyle = "black";
		this.circle.ctx.fill();

		this.circle.ctx.stroke();



	}

	createSubChannel(buffer, pathName, channelGainNode) {
		let source = this.contxt.createBufferSource();
		source.buffer = buffer;
		source.loop = true;
		let gainNode = this.contxt.createGain();
		source.connect(gainNode);
		gainNode.connect(channelGainNode);
		channelGainNode.connect(this.masterGain);



		return {
			source,
			gainNode,
			pathName,
			setGain: (gain) => {
				gainNode.gain.value = gain;
			}
		};
	}




	createAudioPipeline() {

		let beatsBuffers = [
			`${beatsPath}/backseat.wav`,
			`${beatsPath}/yonkers.wav`,
			`${beatsPath}/so_fresh.wav`
		];

		let buffers = [
				`${path}/beat.wav`,
				`${path}/acapella.wav`,
				`${path}/melody.wav`
			];

		debugger;

		this.buffers = buffers;

		let subChannels = [];

		let channelGainNode = this.contxt.createGain();

		loader(beatsBuffers, this.contxt, (err, loadedBuffers) => {
			loadedBuffers.forEach((buffer, idx) => {
				subChannels.push(this.createSubChannel(buffer, beatsBuffers[idx], channelGainNode));
			});


			let beatChannel = {
				subChannels,
				channelGainNode,
				setGain: (gain) => {
					channelGainNode.gain.value = gain;
				}
			};
			this.beatChannel = beatChannel;

			this.setState({loaded: true});

			// window.channels = this.channels;
		});


	}




	metronome(e) {
		let t0 = e.playbackTime;
		// console.log(`starting metronome at ${e.playbackTime}`);
		// debugger;



		for (var step = 0; step <= TIME_SLICE; step++) {
			let schedStartTime = t0 + (this.spb * step);

			if (step === TIME_SLICE) {
				this.sched.insert(t0 + (this.spb * TIME_SLICE), this.metronome);
			} else {
				this.sched.insert(schedStartTime, this.tick, {beat: step});
			}
		}


	}

	tick(e) {
		// console.log(`tick ${e.playbackTime} and beat ${e.args.beat}`);

		let arcSize = (this.circle.max / (TIME_SLICE * 1.0));

		let startingRad = ((this.circle.max / TIME_SLICE ) * e.args.beat);

		// console.log(`startingRad: ${startingRad}`);
		// let endRad = startingRad + arcSize;
		if(e.args.beat === (TIME_SLICE - 1)) {
			this.drawAtRad(startingRad, arcSize, true);
		} else {
			this.drawAtRad(startingRad, arcSize);

		}


	}


	handleUser() {
		if (this.state.playing) {
			console.log('stop');
			this.stopMetronome();
		} else {
			this.startMetronome();
		}
	}

	startMetronome() {
		// console.log('FO SHO');
		let timeSlice = TIME_SLICE;
		let bpmMultiplier = Math.log2(timeSlice/2);
		const spb = 60.0 / (bpm * bpmMultiplier);
		this.spb = spb;
		this.setState({playing: true});
		this.beatChannel.subChannels.forEach(channel => {
			channel.setGain(0.25);
			channel.source.start(0);
		});
		this.sched.start(this.metronome);

	}

	stopMetronome () {
  	this.sched.stop(true);
		this.setMasterGain(0);
  }

	setMasterGain(gain) {
		this.masterGain.gain.value = gain;
	}

	switchTrack() {
		// debugger;
		// return e => {
			// let newTrackIdx = e.currentTarget.value;
		let selectedTrackIdx = arguments[0];
		let selectedTrack = this.beatChannel.subChannels[selectedTrackIdx];

		console.log(`switching to track ${selectedTrack}`);
		console.log(`muting all tracks first`);
		this.muteAllTracks(this.beatChannel.subChannels);
		selectedTrack.setGain(0.5);
	}

	muteAllTracks(subChannels) {
		subChannels.forEach(channel => {
			channel.setGain(0);

		});


	}

	render() {

		let playerText = this.state.playing ? "STOP" : "START";

		if (this.state.loaded){
			return (
				<div>
					{this.beatChannel.subChannels.map((subChannel, idx) => {
						return (
							<div>
							<ReactSlider setGain={subChannel.setGain} idx={idx}
								switchTrack={this.switchTrack}/>
							{subChannel.pathName}
							</div>
						);
					})}


						{/* <ReactSlider setGain={this.setMasterGain}/> */}

					<button onClick={this.handleUser} >{playerText}</button>
				</div>
			);
	 	} else {
				return (
					<div>
					<h1> LOADING </h1>
					</div>
				);
			}

	}
}

export default Root;
