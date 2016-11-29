var React = require('react');
var ReactDOM = require('react-dom');
var RippleEffect = require('ripple-effect');

var App = React.createClass({
	render () {
		return (
			<div>
				<RippleEffect />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
