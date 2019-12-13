import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component{

  nextPage = ()=>{
    this.props.history.push(`/review`);
  }

  render(){
    return(
      <>
        <h2>Any additional comments?</h2>
        <textarea rows="6" cols="40"></textarea>
        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default connect()(CommentForm);