import React from 'react';
import PropTypes from "prop-types"

class Test extends React.Component{
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>Apush</div>
		)
	}
}

Test.propTypes = {
	items: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}

export default Test;