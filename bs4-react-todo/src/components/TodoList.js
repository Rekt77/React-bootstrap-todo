import React, { Component } from 'react'
import { ListGroup, Badge } from 'reactstrap'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const deleted = {
        background:"red"
    }

    const {todos, onDoubleClick, onClick } = this.props;
    
    const todoList = todos.map(
    (todo) => (
        <TodoItem
            key={todo.id}
            done={todo.done}
            onClick={()=> onClick(todo.id)}>
            {todo.text}
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
