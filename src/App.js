import React, { Component } from 'react';
import Students from './component/students.component';
import Movies from './component/movies.component';
class App extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark justify-content-between p-4">
          <a className="navbar-brand" href="root"> IMDB </a>
        </nav>

        <Movies />

        <Students />
      </>
    );
  }
}
export default App;