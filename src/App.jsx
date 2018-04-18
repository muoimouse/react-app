import React, { Component }                       from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home                                       from './components/pages/Home';
import About                                      from './components/pages/About';
import Post                                       from './components/pages/Article';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
        </Switch>
      </Router>
    );
  }
}

export default App;
