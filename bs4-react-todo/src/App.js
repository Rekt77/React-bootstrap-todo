import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import PageTemplates from './components/PageTemplates';
import MainJumbo from './components/MainJumbo';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';


class App extends Component {
  state = {
    input:'',
    todos:[
      {id:0, text: '리액트공부하기', done:true},
      {id:1, text: '컴포넌트 스타일링 해보기', done:false},
    ]
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
  render() {
    return (
      <PageTemplates>
        <NavigationBar/>
        <MainJumbo>
          <TodoList todos={this.state.todos} onDoubleClick={this.handleRemove}/>
          <TodoInput onChange={this.handleChange} value={this.state.input} onInsert={this.handleInsert}/>
        </MainJumbo>
      </PageTemplates>
    );
  }
}

export default App;
