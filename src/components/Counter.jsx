import React, {useEffect, useState} from 'react';
import {Button} from 'semantic-ui-react';

export const Counter = (props) => {
	const [count, setCount] = useState(0);
	const { guestsCounter } = props;

	const increment = () => setCount(count+1);

	useEffect(() => {
		if(guestsCounter) {
			setCount(4);
		}
	}, [guestsCounter]);

	useEffect(() => {
		document.title = `Clicked ${count.toString()} times`
	}, [count]);

	return (
		<>
			<Button color={'green'} onClick={increment}>+</Button>
			<span> You click the button <span style={{fontWeight: 'bold', color: 'green', fontSize: '20px'}}>{count}</span> times </span>
		</>
	)
};