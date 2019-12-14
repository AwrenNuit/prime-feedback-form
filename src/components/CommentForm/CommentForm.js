import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class CommentForm extends Component{

  state = {
    comments: ''
  }

  handleChange = (event)=>{
    this.setState({comments: event.target.value});
  }

  lastPage = ()=>{
    this.props.dispatch({type: `UNDO_LAST`});
    this.props.history.push(`/supported`);
  }

  nextPage = ()=>{
    this.props.dispatch({type: `SEND_FEEDBACK`, payload: this.state.comments});
    this.props.history.push(`/review`);
  }

  render(){
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