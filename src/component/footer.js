import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    profile = (e) => {
        // this.props.history.push('/about')
        window.location.href= 'https://github.com/AyyanNiazi/Real-Estate/'
        console.log(window.location)
    }
    render() {
        return (
            <div className='footer-main' >
             <div className='container' > 
                <div class="row">
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <p class='footer-p' >Dream House-All rights reserved |<span onClick={this.profile.bind(this)} style={{cursor: 'pointer'}}>  Designed & Developed by Mopfhs </span></p>
                    </div>
                    <div class="col-md-4 col-xs-12 col-sm-12">
                        <p>Follow us
                        <Link href="#" class="fa fa-facebook"></Link>
                        <Link href="#" class="fa fa-twitter"></Link>
                        <Link href="#" class="fa fa-google"></Link>
                        <Link href="#" class="fa fa-instagram"></Link>
                        </p>
                    </div>
                </div>
             </div>
            </div>
        );
    }
}

export default Footer;