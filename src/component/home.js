import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import home4 from './images/home4.jpg';
import hlogo1 from './images/hlogo1.png'
import hlogo2 from './images/hlogo2.png'
import hlogo3 from './images/hlogo3.png'
import hlogo4 from './images/hlogo4.png'
import hlogo5 from './images/hlogo5.png'
import hlogo6 from './images/hlogo6.png'

import './stylesheets/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.history.push)
    }
    about = () => {
        this.props.history.push('/about')
    }
    properties = () => {
       this.props.history.push('/properties')
    }
    
    render() {
        return (
            <div>
                <section className='' >
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner home-main ">
                            <div class="carousel-item active">
                                <img class="d-block w-100 h-10" src={home4} alt="First slide" />
                            </div>

                            <div class="carousel-item">
                                <img class="d-block w-100 h-50" src={home2} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 h-100" src={home3} alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <main className='container' >
                    <div className='sec-2' >
                        <div className='row' >
                            <div className='col-lg-8 col-xs-12 col-md-8 col-sm-12' >
                                <h2 style={{ fontSize: '2.099em', fontWeight: '700', color: '#2e3e49' }} >Highly Customized Real Estate Website</h2><br />
                                <p style={{ fontSize: '1.769em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at fermentum felis. Phasellus eget vehicula sem. Duis malesuada sapien nec quam gravida accumsan. Nam vel quam in turpis ultrices </p>
                            </div>
                            <div className='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <button type="button" class=" about-btn my-btn btn btn-outline-info"
                                   onClick={this.about.bind(this)} >
                                    About Us<i class="fa fa-arrow-right" ></i>
                                </button>
                                {/* <button type="button" class=" my-btn btn btn-outline-warning">Warning</button> */}

                            </div>
                        </div>
                    </div>
                </main>

                <section className='sec-3'>
                    <div className='row' >
                        <div className='new-home-div col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                            <h2 className='new-home'  >New<span >Homes</span></h2>
                        </div>
                        <div className='new-home-div-2 col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                            <h2 className='new-home'  >New<span >Homes</span></h2>
                            <p className='new-home-p'>2 bed Rooms <br /> 4 bathrroms <br /> 1200 sqft</p>
                        </div>
                        <div className='new-home-div-3 col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                            <h2 className='new-home'  >Newdsd<span >Homes</span></h2><br />

                        </div>
                    </div>
                </section>

                <section className='sec-4 container' >
                    <div>
                        <h2 style={{ fontSize: '2.099em', fontWeight: '700', color: '#2e3e49' }} >Real Estate Services </h2><br />
                        <p style={{ fontSize: '1.769em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum<br /> at fermentum felis.</p>

                    </div>
                    <div style={{ marginTop: '150px' }} >
                        <div className='row' >
                            <div class='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <div className='row' >
                                    <div class='col-lg-2 col-sm-10'  >
                                        <img src={hlogo1} />
                                    </div>
                                    <div class='col-lg-10 col-sm-10'  >
                                        <h3>Enable Radius Search Functionality</h3><br />
                                        <p>Search properties by their proximity to you in kilometers or miles on all search page</p>
                                    </div>
                                </div>
                            </div>
                            <div class='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <div className='row' >
                                    <div class='col-lg-2 col-sm-2'>
                                        <img src={hlogo2} />
                                    </div>
                                    <div class='col-lg-10 col-sm-10'>
                                        <h3>Complete Searching Filter</h3><br />
                                        <p>Allow your clients to fine-tune their search results and focus on the details that matter the most</p>
                                    </div>
                                </div>
                            </div>
                            <div class='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <div className='row' >
                                    <div class='col-lg-2 col-sm-2'  >
                                        <img src={hlogo3} />
                                    </div>
                                    <div class='col-lg-10 col-sm-10'  >
                                        <h3>Advanced Search Options Panel</h3><br />
                                        <p>Customize your search layout easily with a complete and advanced search option panel</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* @nd row  */}

                        <div className='row' style={{ marginTop: '100px' }}  >
                            <div class='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <div className='row' >
                                    <div class='col-lg-2 col-sm-10'  >
                                        <img src={hlogo4} />
                                    </div>
                                    <div class='col-lg-10 col-sm-10'  >
                                        <h3>Property Settings</h3><br />
                                        <p>Create property listings with all the features you’d expect: area size, price range, amenities and more</p>
                                    </div>
                                </div>
                            </div>
                            <div class='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <div className='row' >
                                    <div class='col-lg-2 col-sm-2'>
                                        <img src={hlogo5} />
                                    </div>
                                    <div class='col-lg-10 col-sm-10'>
                                        <h3>Compare Properties</h3><br />
                                        <p>Let your users compare different properties based on their features and parameters</p>
                                    </div>
                                </div>
                            </div>
                            <div class='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                                <div className='row' >
                                    <div class='col-lg-2 col-sm-2'  >
                                        <img src={hlogo6} />
                                    </div>
                                    <div class='col-lg-10 col-sm-10'  >
                                        <h3>Agent Contact Forms</h3><br />
                                        <p>Help your agents make sales by placing an easy-to-use contact form in the header of each listing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class='sec-5 container' >
                    <div className='row' >
                        <div className='col-lg-8 col-xs-12 col-md-8 col-sm-12' >
                            <h2 style={{ fontSize: '2.099em', fontWeight: '700', color: '#2e3e49' }} >Featured Properties</h2><br />
                            <p style={{ fontSize: '1.769em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at fermentum felis. </p>
                        </div>
                        <div className='col-lg-4 col-xs-12 col-md-4 col-sm-12' >
                            <button type="button" class=" property-btn my-btn btn btn-outline-info"
                               onClick={this.properties .bind(this)} >
                                View All properties<i class="fa fa-arrow-right"></i>
                            </button>
                            {/* <button type="button" class=" my-btn btn btn-outline-warning">Warning</button> */}

                        </div>
                    </div>
                    {/* 2nd */}
                    <div className='row' style={{ marginTop: '30px' }} >
                        <div className=' feature-1 col-lg-7 col-sm-12 col-xs-12' >
                            <div className='top' >
                                <button className='feature'> Featured  </button>
                                <button className='for-rent' > For Rent </button>
                                <button className='feature-new' > New </button>
                            </div>

                            <div className='bottom' >
                                <h5>Modern Appartment With Ocean View</h5>
                                <p style={{ color: '#fff' }} >44,00000  2 bd 2 ba 1900 sq ft</p>
                            </div>
                        </div>

                        <div className=' feature-2 col-lg-5 col-sm-12 col-xs-12' >
                            <div className='top' >
                                <button className='feature'> Featured  </button>
                                <button className='for-rent' > For Rent </button>
                                <button className='hot-offer' > Hot offer </button>
                            </div>

                            <div className='bottom' >
                                <h5>Modern Appartment With Ocean View</h5>
                                <p style={{ color: '#fff' }}>44,00000  2 bd 2 ba 1900 sq ft</p>
                            </div>
                        </div>
                    </div>
                    <div className='row' >
                        <div className=' feature-3 col-lg-5 col-sm-12 col-xs-12' >
                            <div className='top' >
                                <button className='feature'> Featured  </button>
                                <button className='for-rent' > For Rent </button>
                                <button className='feature-new' > New </button>
                            </div>

                            <div className='bottom' >
                                <h5>Modern Appartment With Ocean View</h5>
                                <p class='para' style={{ color: '#fff' }}>44,00000  2 bd 2 ba 1900 sq ft</p>
                            </div>
                        </div>

                        <div className=' feature-4 col-lg-7 col-sm-12 col-xs-12' >
                            <div className='top' >
                                <button className='feature'> Featured  </button>
                                <button className='for-rent' > For Rent </button>
                                <button className='feature-new' > New </button>
                            </div>

                            <div className='bottom' >
                                <h5>Modern Appartment With Ocean View</h5>
                                <p style={{ color: '#fff' }} >44,00000  2 bd 2 ba 1900 sq ft</p>
                            </div>
                        </div>
                    </div>

                    {/* stay in touch with us */}
                    
                    <div className='row stay-with ' >
                        <div className='heading col-lg-3 col-xs-12 col-sm-12 ' style={{textAlign: 'left'}}>
                            <h4> Stay in Touch With us </h4>
                        </div>
                        <form className='col-lg-9 col-xs-12 col-sm-12 '   >
                        <div  className='row '>
                            <div class="input-icon-wrap col-lg-9 col-xs-9 col-sm-9 ">
                                <span class="input-icon"><span class="fa fa-envelope"></span></span>
                                    <input type="text" class="input-with-icon" id="form-name"/>
                            </div>
                            
                            <div className='col-lg-3 col-xs-3 col-sm-3 ' style={{textAlign: 'right',width: '200px'}}>
                            <button type="button" class="  my-btn btn btn-outline-info" >
                                Submit  <i class="fa fa-arrow-right"></i>
                            </button>
                            </div> 
                        </div>
                        </form>
                    </div>
                    </section>
            </div>
                );
            }
        }
        
export default Home;