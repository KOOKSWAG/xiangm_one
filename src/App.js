import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './page/login/login'
import Zhuce from './page/zhuce/zhuce'
import Home from './page/home/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Zhuce" component={Zhuce}/>
        <Route path="/Home" component={Home}/>
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
