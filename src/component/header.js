import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './stylesheets/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* navbar starting here */}

                <nav class="navbar  navbar-expand-lg navbar-light"  style={{backgroundColor: 'transparen'}}>
                    <Link class="navbar-brand" to='/' style={{fontSize: '1.489em'}} >Dream House </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                  
                    <div class=" collapse navbar-collapse  " id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                                <Link class="nav-link " id='my-item' to='/' >Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " id='my-item' to='/properties' >Properties </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " id='my-item' to='/about' >About </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " id='my-item' to='/contact' >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;