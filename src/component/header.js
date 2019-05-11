import React, { Component } from 'react';
import {Link} from 'react-router-dom'
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

                <nav class="navbar my-navbar navbar-expand-lg navbar-light ">
                    <Link class="navbar-brand" to='/' >Dream House </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <Link class="nav-link " to='/'>Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to='/properties' >Properties </Link>                                
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to='/about' >About </Link>                                
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to='/contact'>Contact</Link>                             
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;