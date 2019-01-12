import React, { Component } from 'react'
import ProgressBar from '../components/ProgressBar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class ProgressBarContainer extends Component {
  render() {
    const { todos } = this.props;
    return (
        <ProgressBar
            todos={todos}/>
    )

  }
}

export default connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(ProgressBarContainer)
