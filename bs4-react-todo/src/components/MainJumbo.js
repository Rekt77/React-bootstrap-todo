import React from 'react';
import { Jumbotron, Container } from 'reactstrap'

const MainJumbo = ({children}) => {
    return(
        <Container>
        <Jumbotron>
            <h2>Welcom to AnyDO.JS</h2>
            <hr/>
            <p className="lead">안녕하세요</p>
            {children}
        </Jumbotron>
        </Container>
    );
}

export default MainJumbo;