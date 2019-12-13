import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    return(
      <>
        <h2>Any additional comments?</h2>
        <textarea rows="6" cols="40" onChange={(event)=>this.handleChange(event)} value={this.state.comments}></textarea>
        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default connect()(CommentForm);