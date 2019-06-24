import React, { Component } from 'react'
import logo from '../images/logo.png'

export class Header extends Component {
    render() {
        return (
            <div className = 'navBar'>
                <div className = 'navLogo'>
                    <img src = {logo} /> 
                </div>
                <div className = 'navLink'>
                    <a href = '#'>Home</a>
                </div>
            </div>
        )
    }
}

export default Header
