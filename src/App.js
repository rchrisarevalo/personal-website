import './App.css';
import React from 'react';

import Nav from "./Nav";
import Intro from "./Intro";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <hr id="work"></hr>
      <Works />
      <hr id="contacts"></hr>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
