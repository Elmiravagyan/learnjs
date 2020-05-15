import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModaloF() {
	const [open, setOpen] = useState(false);
	function trigger() {
		setOpen(!open)
	}
  return(
	  <div>
		  {/* TODO  be careful <Button onClick={setOpen(!open)}>Mini</Button> */}
		  <Button onClick={trigger}>Mini</Button>
		  <Modal open={open} onClose={trigger}>
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

export default ModaloF;
