import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default class TodoList extends Component {
  render() {
    return (
      <ListGroup>
          <ListGroupItem>리액트 공부하기</ListGroupItem>
          <ListGroupItem>컴포넌트 스타일링 해보기</ListGroupItem>
      </ListGroup>
    )
  }
}
