import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeelingForm extends Component{

  nextPage = ()=>{
    this.props.history.push(`/understanding`);
  }

  render(){
    return(
      <>
        <h2>How are you feeling today?</h2>
        <p><span>Stressed</span> <span>Calm</span></p>
        <span><input type="radio" name="feeling" id="1" value="1" /></span>
        <span><input type="radio" name="feeling" id="2" value="2" /></span>
        <span><input type="radio" name="feeling" id="3" value="3" /></span>
        <span><input type="radio" name="feeling" id="4" value="4" /></span>
        <span><input type="radio" name="feeling" id="5" value="5" /></span>
        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default connect()(FeelingForm);