import React from  'react';

const WIDTH = 400;
const HEIGHT = 400;

class SoundWave extends React.Component {
	constructor(props) {
		super(props);
		this.canvasId = `${props.channelName}-${props.idx}`;
		this.draw = this.draw.bind(this);

		this.fillStyle = 'white';
		this.strokeStyle = '#59b2a1';

		this.analyser = props.track.analyserNode;
		this.analyseAmp = this.analyseAmp.bind(this);
	}

	componentDidMount() {
		this.analyseAmp();
	}

	analyseAmp() {
		this.analyser.fftSize = 2048;
		this.bufferLength = this.analyser.frequencyBinCount;
		this.dataArray = new Uint8Array(this.bufferLength);
		this.prepDraw();
	}

	prepDraw() {
		this.canvas = document.querySelector(`#${this.canvasId}`);
		this.ctx = this.canvas.getContext("2d");
		this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
		this.draw();
	}


	draw() {
		let drawFFT = requestAnimationFrame(this.draw);
		this.analyser.getByteTimeDomainData(this.dataArray);


		if (this.props.channels[this.props.channelName].selectedTrack === this.props.idx) {
			this.fillStyle = '#607d8b';
			this.strokeStyle = 'white';
		} else {
			this.fillStyle = 'white';
			this.strokeStyle = 'black';
		}


		this.ctx.fillStyle = this.fillStyle;
		this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.beginPath();

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
	}

	render() {
		return (
			<div>
				<canvas className="fft"
					id={this.canvasId}
					onClick={this.props.selectTrack.bind(null, this.props.channelName, this.props.idx)}
					>
				</canvas>
			</div>
		);
	}
}

export default SoundWave;
