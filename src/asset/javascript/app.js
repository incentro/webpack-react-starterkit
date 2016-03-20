import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/input/input.js';

class App extends React.Component {
	constructor(){

		super();

		let data;

		this.state = {
			demo : true,
		}
	}
	
    render() {
    	return (
    		<div>
    			<h1> Hier is een demo opzet: {this.state.demo}</h1>
    			<Input />
    		</div>
    	);

    }
};

ReactDOM.render(<App />, document.querySelector('#app'));

export default App;

