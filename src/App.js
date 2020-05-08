import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from './components/header/Header'
import Dashboard from './pages/dashboard/Dashboard'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loginData: {
        name:'Yoga'
      },
      loginModal: false,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header loginModal={() => this._loginModal()} loginData={this.state.loginData}/>
          <Dashboard/>
        </div>
      </Router>
    )
  }
}

export default App;
