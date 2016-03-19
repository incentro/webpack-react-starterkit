import React from 'react';
import ReactDOM from 'react-dom';

var appContainer = document.querySelectorAll('#app');

class App extends React.Component {
	constructor(){

		super();

		let data;

		this.state = {
			demo : true,
		}
	}
	
    render() {
    	<h1> Hier is een demo opzet</h1>

    }
};

export default App;

ReactDOM.render(<App />, appContainer);

