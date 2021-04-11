import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login/Login';
import FriendsList from './components/FriendsList/FriendsList';

import './App.css';

function App() {
  const logout = () => {
    localStorage.removeItem('loginToken');
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/login" onClick={logout}>Logout</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <ProtectedRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
