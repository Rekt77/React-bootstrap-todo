import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'


export default class TodoItem extends Component {
  render() {

    return (
        <ListGroupItem>{this.props.children}</ListGroupItem>
      
    )
  }
}
