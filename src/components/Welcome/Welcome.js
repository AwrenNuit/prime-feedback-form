import React, {Component} from 'react';

class Welcome extends Component{

  nextPage = ()=>{
    this.props.history.push(`/feeling`);
  }

  render(){
    return(
      <>
        <h2>Take a moment to pause and think about how the day went.</h2>
        <p>When you're ready to continue press NEXT.</p>
        <button onClick={this.nextPage}>NEXT</button>
      </>
    )
  }
}

export default Welcome;