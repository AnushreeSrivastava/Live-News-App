import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Sport from './components/Sport/Sport';
import Business from './components/Business/Business';
import Technology from './components/Technology/Technology';
import Entertainment from './components/Entertainment/Entertainment';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/sport" component={Sport} />
        <Route exact path="/entertainment" component={Entertainment} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
