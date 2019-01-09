import React, { Component } from 'react'
import { ListGroupItem } from 'reactstrap'


export default class TodoItem extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        return this.props.done !== nextProps.done
      }

    render() {
    const style = {
        textDecoration:"line-through"
    }

    if(this.props.done){
    return(
        <ListGroupItem style={style} onClick={this.props.onClick}>
            <input type="checkbox" checked={this.props.done} readOnly/>
            {this.props.children}
        </ListGroupItem>
    
    )} else {
    return(
        <ListGroupItem onClick={this.props.onClick}>
            <input type="checkbox" checked={this.props.done} readOnly/>
            {this.props.children}
        </ListGroupItem>
    )}
};
}