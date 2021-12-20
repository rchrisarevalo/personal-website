import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import August2021Posts from "./components/2021 Posts Components/August2021Posts.jsx";
import September2021Posts from "./components/2021 Posts Components/September2021Posts.jsx";
import October2021Posts from "./components/2021 Posts Components/October2021Posts.jsx";
import November2021Posts from "./components/2021 Posts Components/November2021Posts.jsx";
import December2021Posts from './components/2021 Posts Components/December2021Posts';
import Archives from "./components/Archives.jsx";
import Error404 from "./components/Error404.jsx";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Load}/>
        <Route path ="/about" exact component={Intro}/>
        <Route path="/announcements" exact component={Posts}/>
        <Route path="/announcements/2021/August" exact component={August2021Posts}/>
        <Route path="/announcements/2021/September" exact component={September2021Posts}/>
        <Route path="/announcements/2021/October" exact component={October2021Posts}/>
        <Route path="/announcements/2021/November" exact component={November2021Posts}/>
        <Route path="/announcements/2021/December" exact component={December2021Posts}/>
        <Route path="/archives" exact component={Archives}/>
        <Route exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
