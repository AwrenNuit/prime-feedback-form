import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeelingForm extends Component{

  state = {
    feeling: 0
  }

  handleChange = (event)=>{
    this.setState({feeling: event.target.value});
  }

  nextPage = ()=>{
    this.props.dispatch({type: `SEND_FEELINGS`, payload: this.state.feeling});
    this.props.history.push(`/understanding`);
  }

  render(){
    return(
      <>
        <h2>How are you feeling today?</h2>
        <p><span>Stressed</span> <span>Calm</span></p>
        <span><input type="radio" name="feeling" id="1" value="1" checked={this.state.type === 1} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="feeling" id="2" value="2" checked={this.state.type === 2} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="feeling" id="3" value="3" checked={this.state.type === 3} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="feeling" id="4" value="4" checked={this.state.type === 4} onChange={(event)=>this.handleChange(event)} /></span>
        <span><input type="radio" name="feeling" id="5" value="5" checked={this.state.type === 5} onChange={(event)=>this.handleChange(event)} /></span>
        {/* <input type="radio" name="type" value={'Pickup'} checked={this.state.type === 'Pickup'} onChange={(event)=>this.handleChange(event, 'type')}  /><span>Pickup</span> */}

        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default connect()(FeelingForm);