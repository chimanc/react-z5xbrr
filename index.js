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