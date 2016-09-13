import React from 'react';
import loader  from 'webaudio-buffer-loader';
import ProgressCircle from './progress_circle';
import WebAudioScheduler from 'web-audio-scheduler';
import Channel from './channel';


const path = './stems';
const beatsPath = './stems/beats';
const CIRCUMFERENCE = Math.PI * 2;
const GREENISH = "#59b2a1";
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

		// debugger;


		this.state = {
			note: 0,
			loaded: false,
			playing: false
		};



		this.drawAtRad = this.drawAtRad.bind(this);
		this.createAudioPipeline = this.createAudioPipeline.bind(this);
		this.contxt = new AudioContext();
		this.nextTrackIdx = 0;

		// this.canvasContexts = [];
		this.circles = [];

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

		this.makeImages = this.makeImages.bind(this);
		// this.makeImages(this.circle.ctx);
		this.setCanvas = this.setCanvas.bind(this);
		this.createAudioPipeline();



	}

	setCanvas(id, idx) {

		let canvas = document.querySelector(`#${id}`);

		let ctx = canvas.getContext("2d");


		ctx.lineWidth = 15;
		ctx.strokeStyle = GREENISH;
		let max = 2 * Math.PI;

		// this.circle = {
		// 	canvas,
		// 	ctx,
		// 	max
		// };
		let circle = {
			canvas,
			ctx,
			max
		};

		this.circles.push(circle);


	}


	makeImages(ctx) {
		let base_image = new Image();
  	base_image.src = 'images/kendrick2.png';

  	base_image.onload = () => {
	    ctx.drawImage(base_image, 80, 34);
			// this.createAudioPipeline();
	  };

	}



	drawAtRad(startingRadian, strokeLength, restart=false) {

		startingRadian -= Math.PI / 2.0;

		this.circles.forEach(circle => {

			let ctx = circle.ctx;

			if(restart){
				ctx.clearRect(0, 0, circle.canvas.width, circle.canvas.height);
			}

			ctx.beginPath();
			ctx.arc(100, 60, 50, startingRadian, startingRadian + strokeLength);
			ctx.stroke();
		});



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

		});


	}




	metronome(e) {
		let t0 = e.playbackTime;

		this.switchTrack(this.nextTrackIdx, true);

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

		let arcSize = (CIRCUMFERENCE / (Number(TIME_SLICE) * 1.0));

		let startingRad = ((CIRCUMFERENCE / TIME_SLICE ) * e.args.beat);

		if(e.args.beat === (TIME_SLICE - 1)) {
			this.drawAtRad(startingRad, arcSize, true);
		} else {
			this.drawAtRad(startingRad, arcSize);

		}


	}


	handleUser() {
		if (this.state.playing) {
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

	switchTrack(trackIdx, isScheduled=false) {

		if (!isScheduled) {
			this.nextTrackIdx = trackIdx;
			return;
		}

		console.log('got to be scheduled');

		// THIS EVENT SHOULD BE SCHEDULED.
		let selectedTrack = this.beatChannel.subChannels[trackIdx];



		this.resetAllCircles(this.circles);
		this.circles[trackIdx].ctx.strokeStyle = "#45d9e5";



		this.muteAllTracks(this.beatChannel.subChannels);
		selectedTrack.setGain(0.5);
	}

	resetAllCircles(circles) {
		circles.forEach(circle => {
			circle.ctx.strokeStyle = GREENISH;
		});

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
					<Channel subChannels={this.beatChannel.subChannels}
						switchTrack={this.switchTrack} setChannelGain={this.beatChannel.setGain}
						setCanvas={this.setCanvas}/>



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
