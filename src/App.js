import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./Load";
import Intro from "./Intro";
import Posts from "./Posts";
import Contact from "./Contact";

import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/personal-website/" component={Load}/>
      <Route exact path ="/personal-website/about" component={Intro}/>
      <Route exact path="/personal-website/posts" component={Posts}/>
      <Route exact path="/personal-website/contact" component={Contact}/>
    </div>
  );
}

export default App;
