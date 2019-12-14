import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class UnderstandingForm extends Component{

  state = {
    understanding: 0
  }

  handleChange = (event)=>{
    this.setState({understanding: event.target.value});
  }

  nextPage = ()=>{
    if(this.state.understanding !== 0){
      this.props.dispatch({type: `SEND_FEEDBACK`, payload: this.state.understanding});
      this.props.history.push(`/supported`);
    }
    else{
      alert(`You forgot to select a value!`);
    }
  }

  render(){
    const { classes } = this.props;
    return(
      <>
        <div className="main-div">
          <h2 className="headings">How well are you understanding today's material?</h2>
          <p><span className="left-scale">Need Help</span> <span>Got It</span></p>
          <div className="radio-div">
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="understanding" id="1" value="1" checked={this.state.understanding === '1'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="understanding" id="2" value="2" checked={this.state.understanding === '2'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="understanding" id="3" value="3" checked={this.state.understanding === '3'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="understanding" id="4" value="4" checked={this.state.understanding === '4'} onChange={(event)=>this.handleChange(event)} />
            <FormControlLabel control={<Radio />} className={classes.group} type="radio" name="understanding" id="5" value="5" checked={this.state.understanding === '5'} onChange={(event)=>this.handleChange(event)} />
          </div>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
            NEXT
          </Button>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(connect()(UnderstandingForm));