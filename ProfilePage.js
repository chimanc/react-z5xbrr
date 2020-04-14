import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
  <ProfilePage />,
  document.getElementById('app')
);

/*
When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can’t see each other.

*/