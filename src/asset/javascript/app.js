import React from 'react';
import ReactDOM from 'react-dom';

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
    		<h1> Hier is een demo opzet: {this.state.demo}</h1>
    	);

    }
};

ReactDOM.render(<App />, document.querySelector('#app'));

export default App;

