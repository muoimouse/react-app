import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
// import About from './components/pages/About';
import About from './containers/ArticleListContainer';
import Post from './components/pages/Article';
import './App.css';
import Layout from './components/layout/App';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Post} />
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
