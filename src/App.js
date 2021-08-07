import './App.css';
import React from 'react';

import Nav from "./Nav";
import Intro from "./Intro";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path ="/" component={Intro}/>
      <Route exact path="/works" component={Works}/>
      <Route exact path="/contact" component={Contact}/>
      <Footer />
    </div>
  );
}

export default App;
