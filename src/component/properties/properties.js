import React, { Component } from 'react';
import home2 from '../images/home2.jpg';
import home3 from '../images/home3.jpg';
import home4 from '../images/home4.jpg';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



// import AccountCircle from '@material-ui/icons/AccountCircle';

class Properties extends Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };


    render() {
        const { open } = this.state;
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={home4} alt="First Home image" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={home2} alt="Second home image" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={home3} alt="Third home image" />
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


                <section className='sec-2 container'>
                        <form>
                    <div className='raw'>
                            <div className='col-lg-4 col-md-4' >
                                <div >
                                    <FormControl fullWidth >
                                        <Input
                                            placeholder='Search Property'
                                            id="adornment-amount"
                                            // value={}
                                            // onChange={}
                                            startAdornment={<InputAdornment position="start"><i class="fa fa-search"></i></InputAdornment>}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-2' >
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="All cities"
                                    //   className={classes.textField}
                                    //   value={this.state.currency}
                                    //   onChange={this.handleChange('currency')}
                                    //   SelectProps={{
                                    //     MenuProps: {
                                    //       className: classes.menu,
                                    //     },
                                    //   }}
                                    helperText="Please select city"
                                    margin="normal"
                                  >
                                    <MenuItem> hello   </MenuItem>
                                    <MenuItem> hello   </MenuItem>
                                    <MenuItem >hello   </MenuItem>

                                </TextField>
                            </div>
                            <div className='col-lg-2 col-md-2' >

                            </div><div className='col-lg-2 col-md-2' >

                            </div>
                            <div className='col-lg-2 col-md-2' >

                            </div>
                    </div>
                        </form>
                </section>
            </div>

        );
    }
}


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

// InputWithIcon.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export default Properties;