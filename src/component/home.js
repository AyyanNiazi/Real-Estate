import React, { Component } from 'react';
import h1 from './images/h1.jpeg';
import h2 from './images/h2.jpeg';
import h3 from './images/h3.jpeg';
import h4 from './images/h4.jpeg';
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
                                <img class="d-block w-100 h-10" src={h1} alt="First slide"/>
                            </div>
                           
                                <div class="carousel-item">
                                    <img class="d-block w-100 h-50" src={h3} alt="Second slide"/>
                                </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 h-100" src={h4} alt="Third slide"/>
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