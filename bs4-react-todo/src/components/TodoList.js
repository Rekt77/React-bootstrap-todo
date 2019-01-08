import React, { Component } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap'
import { Badge } from 'reactstrap'
export default class TodoList extends Component {
  render() {
    const style = {
        background:"green"
    }
    return (
      <ListGroup>
          <ListGroupItem>리액트 공부하기<Badge style={style}>complete</Badge></ListGroupItem>
          <ListGroupItem>컴포넌트 스타일링 해보기</ListGroupItem>
      </ListGroup>
      
    )
  }
}
