import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import './stylesheets/header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {         
            scrollled: '',
            
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', ()=> {
            const isTop = window.scrollY < 100;
            if (isTop !== true){
                this.setState({  scrolled: true   })
            }
            else{
                this.setState({ scrolled: false   })
            }
        })
        // window.addEventListener('resize', this.handleResize.bind(this));
    }
    
    componentWillMount(){
        window.removeEventListener('scroll ', ()=>{
        })
        // window.removeEventListener('resize', this.handleResize.bind(this));
    }
    render() {
        return (
            <div  className={this.state.scrolled ? ' nav scrolled' : 'navreact'} >
            <div class='my-nav'   >
                {/* navbar starting here */}

                <nav class="navbar  navbar-expand-lg navbar-light"  style={{backgroundColor: 'transparen'}}>
                    <Link class="navbar-brand" to='/'  > <img src={logo} width='70' height='68' /> <span class='logo-text' >Dream House</span>  </Link>
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
            </div>
        );
    }
}

export default Header;