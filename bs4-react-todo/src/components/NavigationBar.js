import React from 'react';
import { Jumbotron } from 'react-bootstrap'

const Jumbotrons = ({children}) => {
    return(
        <Jumbotron>
            <h1>일정관리</h1>
            {children}
        </Jumbotron>
    );
}

export default Jumbotrons;