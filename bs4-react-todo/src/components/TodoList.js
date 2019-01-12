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
    const {todos, onClick } = this.props;

    const todoList = todos.map(
    (todo) => ( todo.get !==undefined ?
        <TodoItem
            key={todo.get('id')}
            done={todo.get('done')}
            onClick={()=> onClick.handleToggle(todo.get('id'))}>
            {todo.get('text')}
            <Badge
            onClick={() => onClick.handleRemove(todo.get('id'))}
            //  e.preventDefault();
            //  onContextMenu(todo.get('id'))
            //}}
            style={deleted}>
            delete
            </Badge>
        </TodoItem> : null
    )
    )
    return (
      <ListGroup>
          {todoList}
      </ListGroup>
      
    )
  }
}
