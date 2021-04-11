import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
