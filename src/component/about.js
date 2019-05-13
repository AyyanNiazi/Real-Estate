import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import m1 from './images/m1.jpg'
import m2 from './images/m2.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import './stylesheets/about.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div  >
               <section className='about-upper col-lg-12' >
                <div className='about-img-text'>
                    <h1>ABOUT DREAM HOUSE </h1>
                    <p>A Real Estate Organization You Can Trust</p>
                </div>
               </section>

               {/* 2nd section */}
            <main className='container' > 
               <section className=' sec-2' >
                   <div className='row' >
                     <div className='col-lg-6 col-xs-12 col-md-6 col-sm-12' >
                        <p><b>Houzez is a premium WordPress theme for real estate agents where modern aesthetics are combined with tasteful simplicity and where the ease of use is achieved without compromise in your ability to customize the design.</  b></p><br/>
                        <p>Whether you are a real estate agent looking to build a website for your company or a web developer seeking a perfect WordPress theme for your next project, you are certain to appreciate the numerous features and benefits that our theme provides.</p>
                     </div>
                     <div className='col-lg-6 col-xs-12 col-md-6 col-sm-12' >
                        <p>Houzez is a premium WordPress theme for real estate agents where modern aesthetics are combined with tasteful simplicity and where the ease of use is achieved without compromise in your ability to customize the design.</p><br/><br/>
                        <p>Unlike many other real estate themes which confine you to a handful of predefined layouts, Houzez offers a limitless array of possibilities to structure and style your content. </p>
                     </div>
                   </div>

                   <div className='meet' ><h3> Meet Our team  </h3></div>

                   {/* 3rd */}
                    <div className='team-top row' > 
                   <div className='col-lg-3 col-xs-12 col-md-6 col-sm-4 team' >
                        <img src={m2} width='150' height='150' />
                        <h6 style={{color: '#1ebbd7', paddingTop: '30px'}}>M, Azeem khan</h6>
                        <h6>Founder & CEO , Dream House Real Estate</h6><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus ligula ac faucibu</p><br/>
                        <Link style={{color: '#1ebbd7'  }} > View  Profile </Link>
                        
                   </div>
                   <div className='col-lg-3 col-xs-12 col-md-6 col-sm-4 team' >
                        <img src={m1} width='150' height='150' />
                        <h6 style={{color: '#1ebbd7', paddingTop: '30px'}}>M, Salman khan</h6>
                        <h6>Founder & CEO , Dream House Real Estate</h6><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus ligula ac faucibu</p><br/>
                        <Link style={{color: '#1ebbd7'  }} > View  Profile </Link>
                        
                   </div>
                   <div className='col-lg-3 col-xs-12 col-md-6 col-sm-4 team' >
                        <img src={f1} width='150' height='150' />
                        <h6 style={{color: '#1ebbd7', paddingTop: '30px'}}>M, Saira khan</h6>
                        <h6>Founder & CEO , Dream House Real Estate</h6><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus ligula ac faucibu</p><br/>
                        <Link style={{color: '#1ebbd7'  }} > View  Profile </Link>
                        
                   </div>
                   <div className='col-lg-3 col-xs-12 col-md-4 col-sm-4 team' >
                        <img src={f2} width='150' height='150' />
                        <h6 style={{color: '#1ebbd7', paddingTop: '30px'}}>M, Shumaila khan</h6>
                        <h6>Founder & CEO , Dream House Real Estate</h6><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. luctus ligula ac faucibu</p><br/>
                        <Link style={{color: '#1ebbd7'  }} > View  Profile </Link>
                        
                   </div>
                   </div>
               </section>
               
               <section className='sec-3 ' >
                    <div className='succes'>
                    <h3> Dream House Was Built With Your Success In Mind </h3><br/>
                    <p>Get more calls schedules more viewing and earn more commission</p>
                    </div>

                    {/* 2nd */}
                    <div class='row' > 
                    <div className='col-lg-6 col-xs-12 col-md-6 col-sm-12' >
                        <h5>Easy to Get Started</h5><br/>
                        <p>Do you like the demo? Import the provided sample content in a few clicks and start editing it right away</p><br/>
                        <h5>Built-in Monetisation System</h5><br/>
                        <p>No need to install additional plugins to handle money. Send and receive payments straight out of the box</p><br/>
                        <h5>Visual Composer</h5><br/>
                        <p>Not experienced in building websites? Get instant visual feedback by dragging and dropping elements to build pages</p><br/>
                        <h5>Membership System</h5><br/>
                        <p>Offer your agents custom subscription levels by varying the number of featured and regular listings</p>
                    </div>

                    <div className='col-lg-6 col-xs-12 col-md-6 col-sm-12' >
                        <h5>Easy to Get Started</h5><br/>
                        <p>Do you like the demo? Import the provided sample content in a few clicks and start editing it right away</p><br/>
                        <h5>Built-in Monetisation System</h5><br/>
                        <p>No need to install additional plugins to handle money. Send and receive payments straight out of the box</p><br/>
                        <h5>Visual Composer</h5><br/>
                        <p>Not experienced in building websites? Get instant visual feedback by dragging and dropping elements to build pages</p><br/>
                        <h5>Membership System</h5><br/>
                        <p>Offer your agents custom subscription levels by varying the number of featured and regular listings</p>
                    </div>
                    </div>
               </section>
               </main>
            </div>
         );
    }
}
 
export default About;