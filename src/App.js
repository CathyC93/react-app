import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar } from './NavBar'
import { Home } from './Home'
import { Footer } from './Footer'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Route path='/' component={NavBar} />
            <Route path='/' component={Home} />
            <Route path='/' component={Footer} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
