import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class SupportedForm extends Component{

  state = {
    support: 0
  }

  handleChange = (event)=>{
    this.setState({support: event.target.value});
  }

  nextPage = ()=>{
    if(this.state.support !== 0){
      this.props.dispatch({type: `SEND_SUPPORT`, payload: this.state.support});
      this.props.history.push(`/comments`);
    }
    else{
      alert(`You forgot to select a value!`);
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <>
        <h2 className="headings">How well are you being supported?</h2>
        <p><span className="left-scale">Abandoned</span> <span>Supported</span></p>
        <input type="radio" name="supported" id="1" value="1" checked={this.state.support === '1'} onChange={(event)=>this.handleChange(event)} />
        <input type="radio" name="supported" id="2" value="2" checked={this.state.support === '2'} onChange={(event)=>this.handleChange(event)} />
        <input type="radio" name="supported" id="3" value="3" checked={this.state.support === '3'} onChange={(event)=>this.handleChange(event)} />
        <input type="radio" name="supported" id="4" value="4" checked={this.state.support === '4'} onChange={(event)=>this.handleChange(event)} />
        <input type="radio" name="supported" id="5" value="5" checked={this.state.support === '5'} onChange={(event)=>this.handleChange(event)} />
        <br />
        <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
          NEXT
        </Button>
      </>
    )
  }
}

export default withStyles(styles)(connect()(SupportedForm));