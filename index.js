import React from 'react';
import ReactDOM from 'react-dom';



//Example 1//
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);

//Example 2//
/* 
const math = (
  <h1>
    2 + 3 = {2 + 3}
  </h1>;
);

ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
*/

//Example 3//
/*
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
*/

//Example 4//
/*
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
*/

//Example 5//
/*
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
*/