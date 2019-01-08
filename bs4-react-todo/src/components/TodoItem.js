import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'
import { Badge } from 'reactstrap'

export default class TodoItem extends Component {
  render() {
    const deleted = {
        background:"red"
    }

    const completed ={
        background:"green"
    }
    return (
        <ListGroupItem>{this.props.children}<Badge onClick={this.props.onRemove} style={deleted}>delete</Badge></ListGroupItem>
      
    )
  }
}
