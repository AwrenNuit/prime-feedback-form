import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

// For material-ui
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class CommentForm extends Component{

  state = {
    comments: ''
  }

  // Update state to selected value
  handleChange = (event)=>{
    this.setState({comments: event.target.value});
  }

  // Go back one page, pop last value in reducer
  lastPage = ()=>{
    this.props.dispatch({type: `UNDO_LAST`});
    this.props.history.push(`/supported`);
  }

  // Dispatch state to reducer, advance to next page
  nextPage = ()=>{
    if(this.state.comments){
      this.props.dispatch({type: `SEND_FEEDBACK`, payload: this.state.comments});
    }
    this.props.history.push(`/review`);
  }

  render(){
    // For material-ui
    const { classes } = this.props;

    return(
      <>
        <div className="main-div">
          <h2>Any additional comments?</h2>
          <TextField
            id="outlined-multiline-flexible"
            label="(optional)"
            multiline
            rows="4"
            value={this.state.comments}
            onChange={(event)=>this.handleChange(event)}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <br />
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.lastPage}>
            BACK
          </Button>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
            NEXT
          </Button>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(connect()(CommentForm));