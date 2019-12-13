import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component{

  render(){
    return(
      <>
        <h2>Any additional comments?</h2>
        <form>
          <textarea rows="6" cols="40"></textarea>
          <button type="submit">NEXT</button>
        </form>
      </>
    )
  }
}

export default connect()(CommentForm);