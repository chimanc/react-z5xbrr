import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{this.props.abc}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
// You can pass information to a React component, ie. Set an attribute name for a Compoenent and assign value to it
ReactDOM.render(<PropsDisplayer abc='Hello'/>, document.getElementById('app')); 


/*
Every component has something called props.
A component’s props is an object. It holds information about that component.
To see a component’s props object, you use the expression this.props.

*/