import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap'

const MainJumbo = ({children}) => {
    return(
        <Col xs={12} md={8}>
        <Jumbotron>
            <h1 className="display-4">일정관리</h1>
            <hr className="my-4"/>
            {children}
        </Jumbotron>
        </Col>
    );
}

export default MainJumbo;