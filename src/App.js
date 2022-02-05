import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

// Components that will be used as page routes
import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import August2021Posts from "./components/2021 Posts Components/August2021Posts.jsx";
import September2021Posts from "./components/2021 Posts Components/September2021Posts.jsx";
import October2021Posts from "./components/2021 Posts Components/October2021Posts.jsx";
import November2021Posts from "./components/2021 Posts Components/November2021Posts.jsx";
import December2021Posts from './components/2021 Posts Components/December2021Posts';
import January2022Posts from './components/2022 Posts Components/January2022Posts';
import Archives from "./components/Archives.jsx";
import Settings from "./components/Settings.jsx";
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import ArchivePolicy from "./components/policies/ArchivePolicy.jsx";
import Error404 from "./components/Error404.jsx";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Load} />
        <Route path="/about" exact component={Intro} />
        <Route path="/announcements" exact component={Posts} />
        <Route path="/announcements/2021/August" exact component={August2021Posts} />
        <Route path="/announcements/2021/September" exact component={September2021Posts} />
        <Route path="/announcements/2021/October" exact component={October2021Posts} />
        <Route path="/announcements/2021/November" exact component={November2021Posts} />
        <Route path="/announcements/2021/December" exact component={December2021Posts} />
        <Route path="/announcements/2022/January" exact component={January2022Posts} />
        <Route path="/archives" exact component={Archives} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/policies/site-operation" exact component={WebsiteOperation} />
        <Route path="/policies/archive" exact component={ArchivePolicy}/>
        <Route exact component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
