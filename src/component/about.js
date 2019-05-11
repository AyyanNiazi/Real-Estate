import React,{Component} from 'react';
import './stylesheets/about.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <section className='about-upper col-lg-12' >
                <div className='about-img-text'>
                    <h3>ABOUT DREAM HOUSE </h3>
                    <p>A Real Estate Organization You Can Trust</p>
                </div>
               </section>
            </div>
         );
    }
}
 
export default About;