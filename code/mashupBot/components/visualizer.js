import React from 'react';
import loader from 'webaudio-buffer-loader';


const WIDTH = 400;
const HEIGHT = 400;

class Visualizer extends React.Component{

	constructor(props) {
		super(props);

		this.canvasId = "fft";
		this.draw = this.draw.bind(this);
		this.prepDraw = this.prepDraw.bind(this);
		this.analyseFreq = this.analyseFreq.bind(this);

		this.analyseAmp(this.props.ctx, this.props.masterGain);
		// this.analyseFreq(this.props.ctx, this.props.masterGain);



	}


	analyseFreq(ctx, masterGain) {
		this.analyser = ctx.createAnalyser();

		this.analyser.fftSize = 256;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);

		loader(['../stems/beats/backseat.wav'], ctx, (err, loadedBuffers) => {

			let source = ctx.createBufferSource();
			source.buffer = loadedBuffers[0];
			source.loop = true;

			source.connect(this.analyser);
			this.analyser.connect(masterGain);

			// source.connect(masterGain);
			source.start(0);
			this.prepDraw();

		});


	}


	analyseAmp(ctx, masterGain) {
		this.analyser = ctx.createAnalyser();

		// debugger;

		// masterGain.connect(this.analyser);

		this.analyser.fftSize = 2048;
		this.bufferLength = this.analyser.frequencyBinCount;
		this.dataArray = new Uint8Array(this.bufferLength);




		loader(['../stems/beats/backseat.wav'], ctx, (err, loadedBuffers) => {

			let source = ctx.createBufferSource();
			source.buffer = loadedBuffers[0];
			source.loop = true;

			source.connect(this.analyser);
			this.analyser.connect(masterGain);

			// source.connect(masterGain);
			source.start(0);
			this.prepDraw();

		});


	}

	prepDraw() {
		this.canvas = document.querySelector(`#${this.canvasId}`);
		this.ctx = this.canvas.getContext("2d");
		this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
		this.draw();

	}

	draw() {
		// debugger;
		let drawFFT = requestAnimationFrame(this.draw);
		this.analyser.getByteTimeDomainData(this.dataArray);

		this.ctx.fillStyle = '#f7f7f7';
		this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = "#59b2a1";
		this.ctx.beginPath();

		// debugger;
		let sliceWidth = WIDTH * 1.0 / this.bufferLength;
		let x = 0;

		for (let i = 0; i < this.bufferLength; i++) {
			let v = this.dataArray[i] / 128.0;
			let y = v * HEIGHT / 6;
			// console.log(`${v}: ${y}`);

			if(i === 0) {
				this.ctx.moveTo(x, y);
			} else {
				this.ctx.lineTo(x, y);
			}

			x += sliceWidth;

		}

		this.ctx.lineTo(WIDTH, HEIGHT / 2);
		this.ctx.stroke();

		// this.draw();
	}


	render() {
		return (
			<div>
				<canvas id={this.canvasId}></canvas>
			</div>
		);
	}

}

export default Visualizer;
