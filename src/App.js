import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

// Components that will be used as page routes
import Load from "./components/Load.jsx";
import Intro from "./components/Intro.jsx";
import Posts from "./components/Posts.jsx";
import ArchivedPosts from './components/ArchivedPosts.jsx';
import Contact from './components/Contact.jsx';
import Archives from "./components/Archives.jsx";
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import ArchivePolicy from "./components/policies/ArchivePolicy.jsx";
import Error404 from "./components/Error404.jsx";
import ClosedWeb from './components/ClosedWeb.jsx';

import db_close from './components/database/update.json'

import { Portfolio } from './components/Portfolio.jsx';
import { useFetchArchives } from './hooks/useFetchArchives.jsx';
import { useFetchAPIStatus } from './hooks/useFetchAPIStatus.jsx';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
    AOS.refresh();
  }, []);

  const { api_loading, api_error } = useFetchAPIStatus()
  const { pending, error, archives } = useFetchArchives()

  // eslint-disable-next-line no-unused-vars
  const [dateState, setDateState] = useState(new Date())

  // setTimeout(() => {
  //   setDateState(new Date())
  // }, 1000)

  // Set the status of showing the progress bar to true for the time being.
  if (localStorage.getItem("show_progress") !== null && Date.now() >= new Date(2023, 4, 17)) {
    localStorage.removeItem("show_progress")
  }

  const archive_routes = archives.map(result =>
    <Route
      path={`/announcements/${result.beginYear}/${result.month}`}
      element=<ArchivedPosts
        monthNum={result.beginMonth}
        yearNum={result.beginYear}
        monthName={result.month}
      />
    />
  )
  const close_date = db_close["close"].map(dates => dates)[0]

  return (
    <div className="App">
      {(Date.now() < new Date(close_date.closeYear, close_date.closeMonth - 1, close_date.closeDate, close_date.closeHour, close_date.closeMinute)
        || Date.now() >= new Date(close_date.openYear, close_date.openMonth - 1, close_date.openDate, close_date.openHour, close_date.openMinute))
        ?
        !api_loading ?
          !api_error ?
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/announcements" element={<Posts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/archives" element={
                  <Archives
                    pending={pending}
                    error={error}
                    archives={archives}
                  />
              } />
              <Route path="/portfolio" element={<Portfolio />} />

              {/* Routes to all available archives */}
              {!pending ?
                !error ?
                  archive_routes
                  :
                  <></>
                :
                <></>
              }

              <Route path="/policies/site-operation" element={<WebsiteOperation />} />
              <Route path="/policies/archive" element={<ArchivePolicy />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
            :
            <Load api_loading={api_loading} api_error={api_error} />
          :
          <Load api_loading={api_loading} api_error={api_error} />
        :
        <Routes>
          <Route index path="/closed" element={<ClosedWeb />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      }
    </div>
  );
}

export default App;