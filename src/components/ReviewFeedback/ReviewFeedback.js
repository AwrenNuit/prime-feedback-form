import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

// For material-ui
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class ReviewFeedback extends Component{

  // Restart survey if page is refreshed
  componentDidMount(){
    if(this.props.reduxState.length === 0){
      this.props.history.push(`/`);
    }
  }

  // Go back one page, if a comment was made pop last value in reducer
  lastPage = () => {
    if(this.props.reduxState[3]){
      this.undoLastSubmittal();
    }
    this.props.history.push(`/comments`);
  }

  // POST reducer data to database, advance to next page
  nextPage = () => {
    this.postFeedback();
    this.props.history.push('/thanks');
  }

  // POST reducer data to database
  postFeedback = () => {
    let feedback = {
      feeling: this.props.reduxState[0],
      understanding: this.props.reduxState[1],
      support: this.props.reduxState[2],
      comments: this.props.reduxState[3]
    }
    Axios.post(`/feedback`, feedback)
    .then(response=>{
    
    })
    .catch(error=>{
      alert(`error sending data`);
      console.log('error in POST', error);
    })
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
          <h2 className="headings">Review Your Feedback</h2>
          <p>Feeling: {this.props.reduxState[0]}</p>
          <p>Understanding: {this.props.reduxState[1]}</p>
          <p>Supported: {this.props.reduxState[2]}</p>
          <p>Comments: {this.props.reduxState[3]}</p>
          <span>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.lastPage}>
            BACK
          </Button>
          </span>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
            SUBMIT
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

export default withStyles(styles)(connect(putReduxStateOnProps)(ReviewFeedback));