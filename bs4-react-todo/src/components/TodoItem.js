import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'


export default class TodoItem extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        return this.props.done !== nextProps.done
      }

    render() {
    const style = {
        textDecoration:"line-through",
    }

    if(this.props.done){
    return(
        <ListGroupItem style={style} >
            <input type="checkbox" onClick={this.props.onClick} checked={this.props.done} readOnly/>
            {this.props.children}
        </ListGroupItem>
    
    )} else {
    return(
        <ListGroupItem >
            <input type="checkbox" onClick={this.props.onClick} checked={this.props.done} readOnly/>
            {this.props.children}
        </ListGroupItem>
    )}
};
}