import React, { Component } from 'react';
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import home4 from './images/home4.jpg';
import './stylesheets/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                <img class="d-block w-100 h-10" src={home4} alt="First slide"/>
                            </div>
                           
                                <div class="carousel-item">
                                    <img class="d-block w-100 h-50" src={home2} alt="Second slide"/>
                                </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 h-100" src={home3} alt="Third slide"/>
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
                        </div>
                        );
                   }
               }
                
export default Home;