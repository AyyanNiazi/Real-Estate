import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './stylesheets/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='footer-main' >
             <div className='container' > 
                <div class="row">
                    <div class="col-md-8 col-xs-12 col-sm-12">
                        <p>Dream House-All rights reserved</p>
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