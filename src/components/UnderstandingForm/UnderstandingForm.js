import React, {Component} from 'react';
import {connect} from 'react-redux';

class UnderstandingForm extends Component{

  render(){
    return(
      <>
        <h2>How well are you understanding today's material?</h2>
        <p><span>I need help</span> <span>Got it!</span></p>
        <form>
          <span><input type="radio" name="understanding" id="1" value="1" /></span>
          <span><input type="radio" name="understanding" id="2" value="2" /></span>
          <span><input type="radio" name="understanding" id="3" value="3" /></span>
          <span><input type="radio" name="understanding" id="4" value="4" /></span>
          <span><input type="radio" name="understanding" id="5" value="5" /></span>
          <button type="submit">NEXT</button>
        </form>
      </>
    )
  }
}

export default connect()(UnderstandingForm);