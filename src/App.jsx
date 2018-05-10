import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/pages/About';
import About from './containers/ArticleListContainer';
import Article from './containers/ArticleContainer';
import './App.css';
import Layout from './components/Layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/:post" component={Article} />
        {/* <Route path="/:year" component={Home} />
        <Route path="/:year/edit" component={Home} />
        <Route path="/:year/:month/:keyword" component={Home} /> */}
      </Switch>
    </Layout>
  </Router>
);
export default App;
