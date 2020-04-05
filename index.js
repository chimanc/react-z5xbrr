import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  /*
  A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.
  */
  render() {
    return (
      <h1>Hello world</h1>
    );
    
  };

};



ReactDOM.render(
  <MyComponentClass />, 
  document.getElementById('app')
);

//Another way to create Component instance 
// <MyComponentClass></MyComponentClass>

//NOTE ReactDOM.render method can only accept one value, therefore if need you need to render 2 component, you may need to wrap it in <div>, such as <dvi> <ComponentOne /> <ComponentTwo /> </div>

/*
  Watch out for this common mistake
  class Random extends React.Component {
  // This should be in the render function:
  const n = Math.floor(Math.random() * 10 + 1);

  render() {
    return <h1>The number is {n}!</h1>;
  }
};

In the above example, the line with the const n declaration will cause a syntax error, as is it should not be part of the class declaration itself, but should occur in a method like render().


*/