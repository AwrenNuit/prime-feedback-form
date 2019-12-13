import React, {Component} from 'react';
import {connect} from 'react-redux';

class ThankYou extends Component{

  reset = ()=>{
    this.props.dispatch({type: `SEND_RESET`});
    this.props.history.push('/');
  }

  render(){
    return(
      <>
        <h1>FEEDBACK SUBMITTED!</h1>
        <h3>Thank you!</h3>
        <button onClick={this.reset}>Leave New Feedback</button>
      </>
    )
  }
}

// const putReduxStateOnProps = (reduxState)=>({
//   reduxState: reduxState.OBJECT
// });

export default connect()(ThankYou);