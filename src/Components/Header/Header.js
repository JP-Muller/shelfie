import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div id='navbar'>
                <header id='nav-header'>
                    <h1>SHELFIE</h1>
                </header>
                <button id='header-dash-btn'>Dashboard</button>
                <button id='header-add-btn'>Add Product</button>
            </div>
        )
    }
}

export default Header
