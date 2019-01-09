import React from 'react';
import { Jumbotron, Container } from 'reactstrap'

const MainJumbo = ({children}) => {
    return(
        <Container>
        <Jumbotron>
            <h2>Welcom to AnyDO.JS</h2>
            <p className="lead">당신의 일정을 알려드릴게요</p>
            {children}
        </Jumbotron>
        </Container>
    );
}

export default MainJumbo;