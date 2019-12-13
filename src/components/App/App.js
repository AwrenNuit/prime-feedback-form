import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Header} />
          <Route path="/feeling" component={FeelingForm} />
          <Route path="/understanding" component={UnderstandingForm} />
          <Route path="/supported" component={SupportedForm} />
          <Route path="/comments" component={CommentForm} />
          <Route path="/review" component={ReviewFeedback} />
          <Route path="/thanks" component={ThankYou} />
        </Router>
      </div>
    );
  }
}

export default App;
