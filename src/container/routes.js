import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from '../component/home'
import About from '../component/about'
import Contact from '../component/contact'
import Properties from '../component/properties/properties'
import Header from '../component/header';
import Footer from '../component/footer'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} /> 
                        <Route exact path='/about' component={About} /> 
                        <Route exact path='/contact' component={Contact} /> 
                        <Route exact path='/properties' component={Properties} />                    
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Routes;