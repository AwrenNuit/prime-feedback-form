import React, {Component} from 'react';
import {connect} from 'react-redux';

class UnderstandingForm extends Component{

  state = {
    understanding: 0
  }

  handleChange = (event)=>{
    this.setState({understanding: event.target.value});
  }

  nextPage = ()=>{
    this.props.dispatch({type: `SEND_UNDERSTANDING`, payload: this.state.understanding});
    this.props.history.push(`/supported`);
  }

  render(){
    return(
      <>
        <h2>How well are you understanding today's material?</h2>
        <p><span>I need help</span> <span>Got it!</span></p>
        <span><input type="radio" name="understanding" id="1" value="1" checked={this.state.type === 1} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="understanding" id="2" value="2" checked={this.state.type === 2} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="understanding" id="3" value="3" checked={this.state.type === 3} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="understanding" id="4" value="4" checked={this.state.type === 4} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="understanding" id="5" value="5" checked={this.state.type === 5} onChange={(event)=>this.handleChange(event)} /></span>
        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default connect()(UnderstandingForm);