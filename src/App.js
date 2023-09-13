import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

import axios from "axios";

// Components that will be used as page routes
import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import PostsAdmin from './components/database/PostsAdmin.jsx';
import ArchivedPosts from './components/ArchivedPosts.jsx';
import Contact from './components/Contact.jsx';
import Archives from "./components/Archives.jsx";
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import ArchivePolicy from "./components/policies/ArchivePolicy.jsx";
import Error404 from "./components/Error404.jsx";
import ClosedWeb from './components/ClosedWeb.jsx';

import db_archives from './components/database/archives.json'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
    AOS.refresh();

    axios.get("https://rchrisarevalo.github.io/personal-website").then((res) => {
      console.log(res.status)
    }).catch((error) => {
      console.log(error.status)
    })

  }, []);

  const [dateState, setDateState] = useState(new Date())

  setTimeout(() => {
    setDateState(new Date())
  }, 1000)

  // Set the status of showing the progress bar to true for the time being.
  if (localStorage.getItem("show_progress") !== null && Date.now() >= new Date(2023, 4, 17)) {
    localStorage.removeItem("show_progress")
  }

  var archive_routes = db_archives["archives"].map(result => <Route path={`/announcements/${result["beginYear"]}/${result["month"]}`} element=<ArchivedPosts monthNum={result["beginMonth"]} yearNum={result["beginYear"]} monthName={result["month"]} /> />)

  return (
    <div className="App">
      {((Date.now() < new Date(2023, 8, 15, 0, 0)) || Date.now() >= new Date(2023, 8, 17, 0, 0)) &&
        <Routes>
          <Route index path="/" element={<Load />} />
          <Route path="/about" element={<Intro />} />
          <Route path="/announcements" element={<Posts />} />
          {/* <Route path="/posts" element={<PostsAdmin />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/archives" element={<Archives />} />

          {/* Routes to all available archives */}
          {archive_routes}

          <Route path="/policies/site-operation" element={<WebsiteOperation />} />
          <Route path="/policies/archive" element={<ArchivePolicy />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      }
      {Date.now() >= new Date(2023, 8, 15, 0, 0) && Date.now() < new Date(2023, 8, 17, 0, 0) &&
        <Routes>
          <Route index path="/" element={<Load />} />
          <Route path="/closed" element={<ClosedWeb />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      }
    </div>
  );
}

export default App;