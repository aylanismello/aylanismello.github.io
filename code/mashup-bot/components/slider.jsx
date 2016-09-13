import React from 'react';

class Slider extends React.Component {
	constructor(props){
		super(props);
		this.setGain = this.props.setGain;
		this.update = this.update.bind(this);
		this.state = {
			value: 25
		};
	}

	update(e) {
		let newGain = e.currentTarget.value / 100.0;
		this.setState({value: e.currentTarget.value});
		this.setGain(newGain);
	}

	render() {
		return (
			<div>
				<input type="range" min="0" max="100"
					value={this.state.value} onChange={this.update} />
					<br/>
					{this.state.value / 100.0 }
			</div>
		);
	}
}

export default Slider;
