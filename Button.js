import React from 'react';

export class Button extends React.Component {
  render() {
    const stringProps = JSON.stringify(this.props);
    return (
      <div>
        <h1>{stringProps}</h1>
        <button onClick = {this.props.talk}>
          Click me!
        </button>
      </div>
    );
  }
}