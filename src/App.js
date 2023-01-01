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
import August2021Posts from "./components/2021 Posts Components/August2021Posts.jsx";
import September2021Posts from "./components/2021 Posts Components/September2021Posts.jsx";
import October2021Posts from "./components/2021 Posts Components/October2021Posts.jsx";
import November2021Posts from "./components/2021 Posts Components/November2021Posts.jsx";
import December2021Posts from './components/2021 Posts Components/December2021Posts.jsx';
import January2022Posts from './components/2022 Posts Components/January2022Posts.jsx';
import February2022Posts from './components/2022 Posts Components/February2022Posts.jsx';
import March2022Posts from './components/2022 Posts Components/March2022Posts.jsx';
import April2022Posts from './components/2022 Posts Components/April2022Posts.jsx';
import May2022Posts from './components/2022 Posts Components/May2022Posts.jsx';
import June2022Posts from './components/2022 Posts Components/June2022Posts.jsx'
import July2022Posts from './components/2022 Posts Components/July2022Posts.jsx';
import August2022Posts from './components/2022 Posts Components/August2022Posts.jsx';
import September2022Posts from './components/2022 Posts Components/September2022Posts.jsx';
import October2022Posts from './components/2022 Posts Components/October2022Posts.jsx';
import November2022Posts from './components/2022 Posts Components/November2022Posts.jsx';
import December2022Posts from './components/2022 Posts Components/December2022Posts.jsx';
import January2023Posts from './components/2023 Posts Components/January2023Posts.jsx';
import Contact from './components/Contact.jsx';
import Archives from "./components/Archives.jsx";
import Settings from "./components/Settings.jsx";
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import ArchivePolicy from "./components/policies/ArchivePolicy.jsx";
import Error404 from "./components/Error404.jsx";
import ClosedWeb from './components/ClosedWeb.jsx';

import db from "./components/database/update.json";

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
  
  return (
    <div className="App">
      {((Date.now() < new Date(2022, 11, 31, 0, 0)) || Date.now() >= new Date(2023, 0, 2, 0, 0)) &&
        <Routes>
          <Route index path="/" element={<Load />} />
          <Route path="/about" element={<Intro />} />
          <Route path="/announcements" element={<Posts />} />
          {/* <Route path="/posts" element={<PostsAdmin />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/archives" element={<Archives />} />

          {/* 2021 archive routes (expire on December 31, 2024) */}
          {(Date.now() >= new Date(2021, 0, 1) && Date.now() <= new Date(2024, 11, 31)) && <Route path="/announcements/2021/August" element={<August2021Posts />} />}
          {(Date.now() >= new Date(2021, 0, 1) && Date.now() <= new Date(2024, 11, 31)) && <Route path="/announcements/2021/September" element={<September2021Posts />} />}
          {(Date.now() >= new Date(2021, 0, 1) && Date.now() <= new Date(2024, 11, 31)) && <Route path="/announcements/2021/October" element={<October2021Posts />} />}
          {(Date.now() >= new Date(2021, 0, 1) && Date.now() <= new Date(2024, 11, 31)) && <Route path="/announcements/2021/November" element={<November2021Posts />} />}
          {(Date.now() >= new Date(2021, 0, 1) && Date.now() <= new Date(2024, 11, 31)) && <Route path="/announcements/2021/December" element={<December2021Posts />} />}

          {/* 2022 archive routes (expire on December 31, 2025) */}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/January" element={<January2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/February" element={<February2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/March" element={<March2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/April" element={<April2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/May" element={<May2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/June" element={<June2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/July" element={<July2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/August" element={<August2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/September" element={<September2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/October" element={<October2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/November" element={<November2022Posts />} />}
          {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) && <Route path="/announcements/2022/December" element={<December2022Posts />} />}

          {/* 2023 archive routes (expire on December 31, 2026) */}
          {(Date.now() >= new Date(db.archive[0].beginYear, db.archive[0].beginMonth - 1, db.archive[0].beginDate) && Date.now() <= new Date(db.archive[0].endYear, db.archive[0].endMonth - 1, db.archive[0].endDate)) &&
            <Route path="/announcements/2023/January" element={<January2023Posts />} />
          }

          <Route path="/settings" element={<Settings />} />
          <Route path="/policies/site-operation" element={<WebsiteOperation />} />
          <Route path="/policies/archive" element={<ArchivePolicy />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      }
      {Date.now() >= new Date(2022, 11, 31, 0, 0) && Date.now() < new Date(2023, 0, 2, 0, 0) &&
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
