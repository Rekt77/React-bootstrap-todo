import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PageTemplates from './components/PageTemplates';
import MainJumbo from './components/MainJumbo';
import TodoInputContainer from './containers/TodoInputContainer';
import TodoListContainer from './containers/TodoListContainer';
import ProgressBarContainer from './containers/ProgressBarContainer';



class App extends Component {
  state = {
    input:'',
    todos:[]
  }
  id = 1
  getId = () => {
    return ++this.id;
  }
  handleRemove = (id) => {
    console.log("remove")
    const index = this.state.todos.findIndex(todo => todo.id === id);
    this.setState({
      todos:[
        ...this.state.todos.slice(0,index),
        ...this.state.todos.slice(index+1,this.state.todos.length)
      ]
    })
  }
  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      input:value
    })
  }
  handleInsert = () => {
    const newTodo = {
      text: this.state.input,
      done: false,
      id: this.getId()
    }
    this.setState({
      input:'',
      todos:[...this.state.todos, newTodo]
    });
  }

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done:!todos[index].done
    };
    this.setState({
      todos:[
        ...todos.slice(0,index),
        toggled,
        ...todos.slice(index+1,todos.length)
      ]
    })
  }

  render() {
    return (
      <PageTemplates>
        <NavigationBar/>
        <MainJumbo>
          <ProgressBarContainer/>
          <TodoListContainer/>
          <TodoInputContainer/>
        </MainJumbo>
      </PageTemplates>
    );
  }
}

export default App;
