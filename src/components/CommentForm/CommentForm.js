import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

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

  nextPage = ()=>{
    this.props.dispatch({type: `SEND_COMMENTS`, payload: this.state.comments});
    this.props.history.push(`/review`);
  }

  render(){
    const { classes } = this.props;
    return(
      <>
        <h2 className="headings">Any additional comments?</h2>
        <textarea rows="6" cols="40" onChange={(event)=>this.handleChange(event)} value={this.state.comments}></textarea>
        <br />
        <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.nextPage}>
          NEXT
        </Button>
      </>
    )
  }
}

export default withStyles(styles)(connect()(CommentForm));