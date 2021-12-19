import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import Load from "./components/Load.jsx";
import Error404 from "./components/Error404.jsx";
import ClosedWeb from "./components/ClosedWeb.jsx";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Load}/>
        <Route path="/closed" exact component={ClosedWeb}/>
        <Route exact component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
