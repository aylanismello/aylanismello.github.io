import React from 'react';
import Modal from 'react-modal';

class Instructions extends React.Component {

	constructor(props) {
		super(props);

		Modal.setAppElement(document.body);
		this.state = {
			modal: true
		};
	}

	closeModal() {
		this.setState({modal: false});
	}

	render() {
		return (
			<Modal isOpen={this.state.modal}
				onRequestClose={this.closeModal.bind(this)}
				 className="instructions-container">
				 <div className="instructions">
					<div className="x-modal">
						<img src="../images/x.png"
							onClick={this.closeModal.bind(this)}/>
					</div>


					<span> Welcome to <div className="logo">mashupBot</div>! </span>
					<p> The rules of making a mashup are pretty simple. Just.. </p>

					<ul>
						<li> Press play to start </li>
						<li> Click on a different track and it'll load up on the next bar </li>
						<li> Use the volume knobs at the bottom to adjust the volume of each track </li>
					</ul>
					</div>

			</Modal>
		);
	}
}

export default Instructions;
