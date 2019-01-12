import React, { Component } from 'react'
import { ListGroup, Badge } from 'reactstrap'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.todos !== nextProps.todos
  }
  
  render() {
    const deleted = {
        background:"red"
    }
    const {todos, onDoubleClick, onClick } = this.props;
    
    const todoList = todos.map(
    (todo) => (
        <TodoItem
            key={todo.get('id')}
            done={todo.get('done')}
            onClick={()=> onClick(todo.get('id'))}>
            {todo.get('text')}
            <Badge onDoubleClick={() => onDoubleClick(todo.get('id'))} style={deleted}>delete</Badge>
        </TodoItem>
    ))
    return (
      <ListGroup>
          {todoList}
      </ListGroup>
      
    )
  }
}
