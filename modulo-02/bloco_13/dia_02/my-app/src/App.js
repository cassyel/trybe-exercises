import './App.css';
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/howTo" component={HowTo} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>

    )
  }
}

export default App;
