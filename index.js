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

//Another way to create Component instance 
// <MyComponentClass></MyComponentClass>

//NOTE ReactDOM.render method can only accept one value, therefore if need you need to render 2 component, you may need to wrap it in <div>, such as <dvi> <ComponentOne /> <ComponentTwo /> </div>