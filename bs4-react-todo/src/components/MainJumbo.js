import React from 'react';
import { Jumbotron, Container } from 'reactstrap'

const MainJumbo = ({children}) => {
    return(
        <Container>
        <h1 className="display-3">Welcom to AnyDO.JS</h1>
        <p className="lead">당신의 일정을 알려드릴게요.</p>
        <hr className="my-2" />
        <Jumbotron>
            {children}
        </Jumbotron>
        </Container>
    );
}

export default MainJumbo;