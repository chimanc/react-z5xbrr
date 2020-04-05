import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  /*
  A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.
  */
  render() {
    return <h1>Hello world</h1>;
  }
};



ReactDOM.render(
  <MyComponentClass />, 
  document.getElementById('app')
);