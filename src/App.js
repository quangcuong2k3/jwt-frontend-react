import './App.scss';
import Login from './components/Login/Login';
import Nav from './components/Navigation/Nav';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/news">
            New
          </Route>
          <Route path="/about">
            About
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            home
          </Route>
          <Route path="*">
            404 Not Found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
