import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }



class PropertyData extends Component {
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    render() { 
        const { value } = this.state;
        return ( 
            <NoSsr>
            <div >
              <AppBar position="static" >
                <Tabs variant="fullWidth" style={{backgroundColor: '#1ebbd7'}} value={value} onChange={this.handleChange}>
                  <LinkTab label="All" href="page1" id='tabs' style={{fontWeight: 700, hover: 'green' }} />
                  <LinkTab label="For Rent" href="page2" id='tabs' style={{fontWeight: 700, }} />
                  <LinkTab label="Without Rent" href="page3" id='tabs' style={{fontWeight: 700, }} />
                </Tabs>
              </AppBar>


              {value === 0 && <TabContainer>
              <div class='row' > 
                <div class='col-sm-3 col-xs-12 bg-img-all' >
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
                </div>

                <div class='col-sm-6 col-xs-12' >
                    <div class='center-top' > 
                      <h3>Modern Design villa with ppol and guest house</h3>
                      <p>598 NW 12 Ave Fort Lauderable Fl 333 </p>
                    </div>

                  <div  class='center-bottom' >
                      
                      <ul class='center-item'>                       
                        <li>
                        <span>3</span>
                        Bedroom
                        </li>
                        <li>
                          <span>1</span>
                          Bathroom
                        </li>
                        <li>
                          <span>2180</span>
                          Sq ft
                        </li>
                      </ul>
                  </div>
                </div>

                <div class='col-sm-3 col-xs-12' >
                    
                </div>
                </div>
              </TabContainer>}

              {/* For rent Layer */}
              {value === 1 && <TabContainer>

                <div class='col-sm-3 col-xs-12 bg-img-rent' >
                    
                    </div>
    
                    <div class='col-sm-3 col-xs-12' >
                        
                    </div>
    
                    <div class='col-sm-3 col-xs-12' >
                        
                    </div>
              </TabContainer>}

              {/* For rent Layer */}


              {value === 2 && <TabContainer>
                <div class='col-sm-3 col-xs-12 bg-img-out' >
                    
                    </div>
    
                    <div class='col-sm-3 col-xs-12' >
                        
                    </div>
    
                    <div class='col-sm-3 col-xs-12' >
                        
                    </div>    
              </TabContainer>}
            </div>
          </NoSsr>
         );
    }
}
 
export default PropertyData;