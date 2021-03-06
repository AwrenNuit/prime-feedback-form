import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

// For material-ui
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class ThankYou extends Component{

  // set reducer state to empty, return to Welcome page
  returnToWelcomePage = () => {
    this.resetReducerState();
    this.props.history.push('/');
  }

  resetReducerState = () => {
    this.props.dispatch({type: `RESET`});
  }

  render(){
    // For material-ui
    const { classes } = this.props;

    return(
      <>
        <div className="main-div">
          <h1>FEEDBACK SUBMITTED!</h1>
          <h3>Thank you!</h3>
          <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.returnToWelcomePage}>
            Leave New Feedback
          </Button>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(connect()(ThankYou));