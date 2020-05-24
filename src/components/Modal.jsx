import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class Modalo extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	};

	trigger = () => this.setState({ open: !this.state.open })

	render() {
		const { open } = this.state;
		console.log(this.props.slang, 'rendered');

		return (
			<div>
				<Button onClick={this.trigger}>Mini</Button>
				<Modal open={open} onClose={this.trigger}>
					<Modal.Header>Delete Your Account</Modal.Header>
					<Modal.Content>
						<p>Are you sure you want to delete your account</p>
					</Modal.Content>
					<Modal.Actions>
						<Button negative>No</Button>
						<Button
							positive
							icon='checkmark'
							labelPosition='right'
							content='Yes'
						/>
					</Modal.Actions>
				</Modal>
			</div>
		)
	}
}

export default Modalo;
