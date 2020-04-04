import React from 'react';
import ReactDOM from 'react-dom';

//NOT IF statement inside JSX//

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

let img;

var f=coinToss();
console.log(`this is f ${f}`);

var c = coinToss();
console.log(`this is c ${c}`);

// if/else statement begins here:
if (coinToss()=== 'heads')
  {
    img = <img src={pics.kitty} />;
  }
else 
  {
    img = <img src={pics.doggy} />;
  }

ReactDOM.render(img,document.getElementById('app'))
