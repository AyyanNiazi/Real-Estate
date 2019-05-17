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

                <div class='col-sm-3 col-xs-12 bg-img-all' >
                    
                </div>

                <div class='col-sm-3 col-xs-12' >
                    
                </div>

                <div class='col-sm-3 col-xs-12' >
                    
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