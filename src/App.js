import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./Load.jsx";
import Intro from "./Intro.jsx";
import Posts from "./Posts.jsx";
import Contact from "./Contact.jsx";
import Error404 from "./Error404.jsx";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Load}/>
        <Route path ="/about" exact component={Intro}/>
        <Route path="/posts" exact component={Posts}/>
        <Route path="/contact" exact component={Contact}/>
        <Route exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
