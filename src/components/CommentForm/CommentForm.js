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

  // Restart survey if page is refreshed
  componentDidMount(){
    if(this.props.reduxState.length === 0){
      this.props.history.push(`/`);
    }
  }

  // Update state to selected value
  handleChange = (event) => {
    this.setState({comments: event.target.value});
  }

  // Go back one page, pop last value in reducer
  lastPage = () => {
    this.undoLastSubmittal();
    this.props.history.push(`/supported`);
  }

  // Dispatch state to reducer, advance to next page
  nextPage = () => {
    if(this.state.comments){
      this.sendCurrentSubmittal();
    }
    this.props.history.push(`/review`);
  }

  // Dispatch state to reducer
  sendCurrentSubmittal = () => {
    this.props.dispatch({type: `SEND_FEEDBACK`, payload: this.state.comments});
  }

  // Undo last dispatch
  undoLastSubmittal = () => {
    this.props.dispatch({type: `UNDO_LAST`});
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

// Read data from reducer
const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.surveyReducer
});

export default withStyles(styles)(connect(putReduxStateOnProps)(CommentForm));