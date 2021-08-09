import './App.css';
import React from 'react';

import Nav from "./Nav";
import Intro from "./Intro";
import Works from "./Works";
import Posts from "./Posts";
import Contact from "./Contact";
import Footer from "./Footer";

import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path ="/personal-website/about" component={Intro}/>
      <Route exact path="/personal-website/works" component={Works}/>
      <Route exact path="/personal-website/posts" component={Posts}/>
      <Route exact path="/personal-website/contact" component={Contact}/>
      <Footer />
    </div>
  );
}

export default App;
