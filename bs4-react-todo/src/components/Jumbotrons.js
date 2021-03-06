import React from 'react';
import { Jumbotron } from 'react-bootstrap'

const Jumbotrons = ({children}) => {
    return(
        <Jumbotron>
            <h1 className="display-4">일정관리</h1>
            <hr className="my-4"/>
            <p className="lead">{children}</p>
        </Jumbotron>
    );
}

export default Jumbotrons;