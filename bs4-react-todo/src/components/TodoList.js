import React, { Component } from 'react'
import { ListGroup, Badge } from 'reactstrap'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const deleted = {
        background:"red"
    }

    const completed ={
        background:"green"
    }
    const {todos, onDoubleClick } = this.props;
    
    const todoList = todos.map(
    (todo) => (
        <TodoItem
            key={todo.id}
            done={todo.done}>
            {todo.text}
            <Badge onDoubleClick={() => onDoubleClick(todo.id)} style={completed}>completed</Badge>
            <Badge onDoubleClick={() => onDoubleClick(todo.id)} style={deleted}>delete</Badge>
        </TodoItem>
    ))
    return (
      <ListGroup>
          {todoList}
      </ListGroup>
      
    )
  }
}
