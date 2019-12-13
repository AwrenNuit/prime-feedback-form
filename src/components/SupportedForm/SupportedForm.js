import React, {Component} from 'react';
import {connect} from 'react-redux';

class SupportedForm extends Component{

  state = {
    support: 0
  }

  handleChange = (event)=>{
    this.setState({support: event.target.value});
  }

  nextPage = ()=>{
    this.props.dispatch({type: `SEND_SUPPORT`, payload: this.state.support});
    this.props.history.push(`/comments`);
  }

  render(){
    return(
      <>
        <h2>How well are you being supported?</h2>
        <p><span>I need help</span> <span>Got it!</span></p>
        <span><input type="radio" name="supported" id="1" value="1" checked={this.state.type === 1} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="supported" id="2" value="2" checked={this.state.type === 2} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="supported" id="3" value="3" checked={this.state.type === 3} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="supported" id="4" value="4" checked={this.state.type === 4} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="supported" id="5" value="5" checked={this.state.type === 5} onChange={(event)=>this.handleChange(event)} /></span>
        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default connect()(SupportedForm);