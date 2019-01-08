import React from 'react';
import { Navbar,Row } from 'react-bootstrap'
import logo from '../logo.svg'

const style = {
    width:'30px',
    height:'30px'
}
const NavigationBar = () => {
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Row>
                        <a href="#home">
                            <img src={logo} style={style} alt="AnyDO" pullLeft/>AnyDO.js
                        </a>
                    </Row>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}

export default NavigationBar;