import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewFeedback extends Component{

  nextPage = ()=>{
    this.props.history.push('/thanks');
  }
  
  render(){
    return(
      <>
        <h2>Review Your Feedback</h2>
        {/* <p>Feeling: {this.props.reduxState.feelings}</p>
        <p>Understanding: {this.props.reduxState.understanding}</p>
        <p>Supported: {this.props.reduxState.supported}</p>
        <p>Comments: {this.props.reduxState.comments}</p> */}
        <button onClick={this.nextPage}>SUBMIT</button>
      </>
    )
  }
}

// const putReduxStateOnProps = (reduxState)=>({
//   reduxState: reduxState.OBJECT
// });

export default connect()(ReviewFeedback);