import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/logout" component={Login} />
        <Route path="/friends/add" component={AddFriend} />
        <Route path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
