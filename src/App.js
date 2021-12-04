import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import August_Posts from "./components/August_Posts.jsx";
import September_Posts from "./components/September_Posts.jsx";
import October_Posts from "./components/October_Posts.jsx";
import November_Posts from "./components/November_Posts.jsx";l
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
        <Route path="/announcements/2021/August" exact component={August_Posts}/>
        <Route path="/announcements/2021/September" exact component={September_Posts}/>
        <Route path="/announcements/2021/October" exact component={October_Posts}/>
        <Route path="/announcements/2021/November" exact component={November_Posts}/>
        <Route exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
