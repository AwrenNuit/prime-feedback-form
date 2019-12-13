import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class ReviewFeedback extends Component{

  nextPage = ()=>{
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
    this.props.history.push('/thanks');
  }

  render(){
    return(
      <>
        <h2>Review Your Feedback</h2>
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