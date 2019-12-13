import React, {Component} from 'react';

class Header extends Component{

  render(){
    return(
      <>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <h2>Take a moment to pause and think about how the day went.</h2>
        <p>When you're ready to continue press NEXT.</p>
        <button>NEXT</button>
      </>
    )
  }
}

export default Header;