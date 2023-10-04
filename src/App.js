import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

// Components that will be used as page routes
import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import PostEnter from './components/database/PostsAdmin';
import ArchivedPosts from './components/ArchivedPosts.jsx';
import Contact from './components/Contact.jsx';
import Archives from "./components/Archives.jsx";
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import ArchivePolicy from "./components/policies/ArchivePolicy.jsx";
import Error404 from "./components/Error404.jsx";
import ClosedWeb from './components/ClosedWeb.jsx';

import db_archives from './components/database/archives.json'

import { io } from 'socket.io-client'

export var socket_client_conn = io('http://localhost:5000')

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
    AOS.refresh();

  }, []);

  // eslint-disable-next-line no-unused-vars
  const [dateState, setDateState] = useState(new Date())
  // eslint-disable-next-line no-unused-vars
  const [connection, setConnection] = useState(socket_client_conn)

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
      {((Date.now() < new Date(2023, 7, 28, 0, 0)) || Date.now() >= new Date(2023, 8, 13, 0, 0)) &&
        <Routes>
          <Route index path="/" element={<Load />} />
          <Route path="/about" element={<Intro />} />
          <Route path="/announcements" element={<Posts />} />
          <Route path="/posts" element={<PostEnter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/archives" element={<Archives />} />

          {/* Routes to all available archives */}
          {archive_routes}

          <Route path="/policies/site-operation" element={<WebsiteOperation />} />
          <Route path="/policies/archive" element={<ArchivePolicy />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      }
      {Date.now() >= new Date(2023, 7, 28, 0, 0) && Date.now() < new Date(2023, 8, 13, 0, 0) &&
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