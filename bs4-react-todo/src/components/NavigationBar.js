import React from 'react';
import { Navbar } from 'react-bootstrap'

const NavigationBar = ({children}) => {
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">AnyDO.js</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}

export default NavigationBar;