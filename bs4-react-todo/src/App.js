import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PageTemplates from './components/PageTemplates';
import MainJumbo from './components/MainJumbo';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';


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
          <TodoList todos={this.state.todos} onDoubleClick={this.handleRemove} onClick={this.handleToggle}/>
          <TodoInput onChange={this.handleChange} value={this.state.input} onInsert={this.handleInsert}/>
        </MainJumbo>
      </PageTemplates>
    );
  }
}

export default App;
