import React from  'react';


const WIDTH = 400;
const HEIGHT = 400;

class SoundWave extends React.Component {
	constructor(props) {
		super(props);
		this.canvasId = `${props.channelName}-${props.idx}`;
		// this.track = props.track;
		this.changeTrack = this.changeTrack.bind(this);
		this.draw = this.draw.bind(this);

		this.fillStyle = 'white';
		this.strokeStyle = '#59b2a1';

		this.analyser = props.track.analyserNode;
		this.analyseAmp = this.analyseAmp.bind(this);
		// debugger;

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
		//

		// debugger;

		this.draw();
	}


	draw() {
		let drawFFT = requestAnimationFrame(this.draw);
		this.analyser.getByteTimeDomainData(this.dataArray);

		// background


		if (this.props.selectedTracks[this.props.channelName] === this.props.idx) {
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

	}

	changeTrack(idx, id) {
		this.props.selectTrack(this.props.channelName, idx);
		// debugger;
		this.props.changeTrack(idx, id);
	}



	render() {
		return (
			<div>
				<canvas className="fft" id={this.canvasId}
					// onClick={this.props.selectTrack.bind(null, this.props.idx, this.id)}>
					onClick={this.changeTrack.bind(null, this.props.idx, this.id)}
					>

				</canvas>
			</div>
		);
	}
}

export default SoundWave;
