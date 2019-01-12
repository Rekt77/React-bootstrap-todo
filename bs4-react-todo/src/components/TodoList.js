import React, { Component } from 'react'
import { ListGroup, Badge } from 'reactstrap'
import TodoItem from './TodoItem'
import calendar from '../calendar.svg'

export default class TodoList extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.todos !== nextProps.todos
  }
  
  render() {
    const deleted = {
        background:"red",
        cursor:"pointer"
    }
    const style = {
      width:"30%",
      height:"30%"
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
            style={deleted}>
            delete
            </Badge>
        </TodoItem> : null
        
    )
    )
    
    return (
      <ListGroup>
          {todoList.size === 0 ?
          <p align="center" className="lead">
          <br/>
          <img src={calendar} alt="calender" style={style}/>
          <br/><b>아무런 일정이 없습니다.<br/>
          하단의 추가버튼을 눌러 당신의 일정을 추가해보세요.<br/>
          </b></p>
        : todoList}
      </ListGroup>
    )
  }
}
