import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import logo from '../logo.svg'

const style = {
    width:'30px',
    height:'30px'
}
const NavigationBar = ({children}) => {
    return(
        <div>
            <Navbar dark>
                <NavbarBrand>
                            <a href="#home">
                                <img src={logo} style={style} alt="AnyDO"/>AnyDO.js
                            </a>
                </NavbarBrand>
            </Navbar>
            <div>
                {children}
            </div>
        </div>
    );
}

export default NavigationBar;