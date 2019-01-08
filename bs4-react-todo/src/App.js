import React, { Component, Fragment } from 'react';
import NavigationBar from './components/NavigationBar'
import Jumbotrons from './components/NavigationBar';
class App extends Component {
  render() {
    return (
      <Fragment>
      <NavigationBar/>
      <Jumbotrons/>
      </Fragment>
    );
  }
}

export default App;
