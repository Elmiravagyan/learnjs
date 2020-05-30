import React, { useState } from 'react';
import Items from './components/Items';
import {Button} from 'semantic-ui-react';
import {Counter} from './components/Counter';

function App() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const items = ['Hamo', 'Valod', 'Arshak'];

	const duKartoshkaEs = () => {
		setData(items);
		setIsLoading(false);
	};

	const changeDataVisibility = () => {
		setIsLoading(true);
		// call to server imitation
		setTimeout(duKartoshkaEs, 2000);
	};

	console.log('rendered', data, isLoading);

	return (
		<>
			{/*<Button onClick={changeDataVisibility}>Get Data</Button>*/}
			{/*<Items items={data} isLoading={isLoading}/>*/}
			<Counter guestsCounter={true}/>
			<Counter />
		</>
	)
}

export default App;