import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PageTemplates from './components/PageTemplates';
import MainJumbo from './components/MainJumbo';
import TodoInput from './components/TodoInput'

class App extends Component {
  render() {
    return (
      <PageTemplates>
        <NavigationBar/>
        <MainJumbo>
          <p className="lead">안녕하세요</p>
          <TodoInput/>
        </MainJumbo>
      </PageTemplates>
    );
  }
}

export default App;
