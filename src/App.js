import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'
import Portfolio from './components/Portfolio/portfolio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
