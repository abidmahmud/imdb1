import React, { Component } from 'react';
import Students from './component/students.component';
import Movies from './component/movies.component';
import Rating from './component/rating.component';
import Navbar from './component/navbar.component';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Movies />

        {/* <Students /> */}
      </>
    );
  }
}
export default App;