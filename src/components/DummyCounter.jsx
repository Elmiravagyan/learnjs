import React from 'react';
import {Button, Message} from 'semantic-ui-react';

export const DummyCounter = (props) => {
	const { count, increment, decrement } = props;
	return (
		<>
			<Button onClick={increment}>+</Button>
			<span>{count}</span>
			<Button onClick={decrement}>-</Button>
			{count > 33 ? <Message color='green'>Առևտուրը լավ է</Message> : <Message color='red'>Էդքան էլ լավ չի</Message>}
		</>
	)
};