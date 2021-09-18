import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import August_Posts from "./components/August_Posts.jsx";
import Contact from "./components/Contact.jsx";
import Error404 from "./components/Error404.jsx";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Load}/>
        <Route path ="/about" exact component={Intro}/>
        <Route path="/announcements" exact component={Posts}/>
        <Route path="/contact-info" exact component={Contact}/>
        <Route path="/announcements/2021/august" exact component={August_Posts}/>
        <Route exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
