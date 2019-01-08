import React from 'react';
import { Jumbotron, Grid } from 'react-bootstrap'

const MainJumbo = ({children}) => {
    return(
        <Grid>
        <Jumbotron>
            <h2>Welcom to AnyDO.JS</h2>
            <hr/>
            {children}
        </Jumbotron>
        </Grid>
    );
}

export default MainJumbo;