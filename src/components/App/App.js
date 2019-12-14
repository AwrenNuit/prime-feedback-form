import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import 'typeface-roboto';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route path="/feeling" component={FeelingForm} />
          <Route path="/understanding" component={UnderstandingForm} />
          <Route path="/supported" component={SupportedForm} />
          <Route path="/comments" component={CommentForm} />
          <Route path="/review" component={ReviewFeedback} />
          <Route path="/thanks" component={ThankYou} />
          <Route path="/admin" component={Admin} />          
        </Router>
      </div>
    );
  }
}

export default App;
