import React, { useState } from 'react';
import {Button, Message} from 'semantic-ui-react';

export const StateFullCounter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count+1);
	const decrement = () => setCount(count-1);

	return (
		<>
			<Button onClick={increment}>+</Button>
			<span>{count}</span>
			<Button onClick={decrement}>-</Button>
			{count > 33 ? <Message color='green'>Առևտուրը լավ է</Message> : <Message color='red'>Էդքան էլ լավ չի</Message>}
		</>
	)
};