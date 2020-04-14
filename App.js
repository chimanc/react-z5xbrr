import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <h1>
          {this.props.firstName}
        </h1>
        <Greeting name={this.props.firstName} signedIn={true}/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App firstName="MEME"/>, 
  document.getElementById('app')
);

/* You can pass first pass in props from ReactDOM render method to App Component then to Greeting Component

*/