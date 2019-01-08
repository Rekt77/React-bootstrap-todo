import React, { Component, Fragment } from 'react';
import NavigationBar from './components/NavigationBar'
class App extends Component {
  render() {
    return (
      <Fragment>
      <NavigationBar/>
      <div>
        <p>일정관리</p>
      </div>
      </Fragment>
    );
  }
}

export default App;
