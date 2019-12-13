import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class ReviewFeedback extends Component{

  nextPage = ()=>{
    Axios.post
    this.props.history.push('/thanks');
  }

  render(){
    return(
      <>
        <h2>Review Your Feedback</h2>
        {JSON.stringify(this.props.reduxState)}

        <p>Feeling: {this.props.reduxState[0]}</p>
        <p>Understanding: {this.props.reduxState[1]}</p>
        <p>Supported: {this.props.reduxState[2]}</p>
        <p>Comments: {this.props.reduxState[3]}</p>
        <button onClick={this.nextPage}>SUBMIT</button>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.surveyReducer
});

export default connect(putReduxStateOnProps)(ReviewFeedback);