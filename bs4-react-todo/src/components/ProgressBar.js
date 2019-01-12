import React, {Component} from 'react'
import { Progress } from 'reactstrap'



class ProgressBar extends Component{
    render() {
    const { todos } = this.props;
    const doneCollector = todos.groupBy(elem => elem).map(arr => {return arr.get(0).get("done")})
    const doneRate = todos.size === 0 ? 0 : doneCollector.filter((name) => name === true).size/todos.size*100;
    return(
        <div>
            <div className="text-center">{Math.floor(doneRate)}%</div>
            <Progress value={Math.floor(doneRate)}/>
        </div>
    )}
}

export default ProgressBar;
    