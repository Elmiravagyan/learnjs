import React from 'react';
import {Loader} from 'semantic-ui-react';

function Items(props) {
	const { items, isLoading } = props;
	console.log(items);

	if(isLoading) {
		return <Loader active/>
	}

	if(!items) {
		return <div>Please click the button to get the data</div>
	}

	return(
	<>
		{items.length !== 0 ?
		<div style={{display: 'flex', flexDirection: 'column'}}>
			{items.map((item) => <span>{item}</span>)}
		</div> :
		<div>List is empty</div>}
	</>
	)
}

export default Items;