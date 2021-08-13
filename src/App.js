import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./Load";
import Intro from "./Intro";
import Posts from "./Posts";
import Contact from "./Contact";
import Error404 from "./Error404";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/personal-website/" exact component={Load}/>
        <Route path ="/personal-website/about" exact component={Intro}/>
        <Route path="/personal-website/posts" exact component={Posts}/>
        <Route path="/personal-website/contact" exact component={Contact}/>
        <Route exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
