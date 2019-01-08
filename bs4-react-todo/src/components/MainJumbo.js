import React from 'react';
import { Jumbotron, Container } from 'reactstrap'

const MainJumbo = ({children}) => {
    return(
        <Container>
        <Jumbotron>
            <h2>Welcom to AnyDO.JS</h2>
            <hr/>
            {children}
        </Jumbotron>
        </Container>
    );
}

export default MainJumbo;