import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
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
import December2021Posts from './components/2021 Posts Components/December2021Posts.jsx';
import January2022Posts from './components/2022 Posts Components/January2022Posts.jsx';
import February2022Posts from './components/2022 Posts Components/February2022Posts.jsx';
import March2022Posts from './components/2022 Posts Components/March2022Posts.jsx';
import April2022Posts from './components/2022 Posts Components/April2022Posts.jsx';
import Contact from './components/Contact.jsx';
import Archives from "./components/Archives.jsx";
import Settings from "./components/Settings.jsx";
import WebsiteOperation from "./components/policies/WebsiteOperation.jsx";
import ArchivePolicy from "./components/policies/ArchivePolicy.jsx";
import Error404 from "./components/Error404.jsx";
import ClosedWeb from './components/ClosedWeb.jsx'

var today = new Date().getDate();
var mem_day = 30;

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">

      { (today < mem_day || today > mem_day) && 
        <Routes>
          <Route index path="/" element={<Load />} />
          <Route path="/about" element={<Intro />} />
          <Route path="/announcements" element={<Posts />} />
          <Route path="/announcements/2021/August" element={<August2021Posts />} />
          <Route path="/announcements/2021/September" element={<September2021Posts />} />
          <Route path="/announcements/2021/October" element={<October2021Posts />} />
          <Route path="/announcements/2021/November" element={<November2021Posts />} />
          <Route path="/announcements/2021/December" element={<December2021Posts />} />
          <Route path="/announcements/2022/January" element={<January2022Posts />} />
          <Route path="/announcements/2022/February" element={<February2022Posts />} />
          <Route path="/announcements/2022/March" element={<March2022Posts />} />
          <Route path="/announcements/2022/April" element={<April2022Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/policies/site-operation" element={<WebsiteOperation />} />
          <Route path="/policies/archive" element={<ArchivePolicy />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      }

      {/* Website will close for Memorial Day */}
      { (today === mem_day) && 
        <Routes>
          <Route index path="/" element={<Load />} />
          <Route path="/closed" element={<ClosedWeb />} />
        </Routes>
      }

    </div>
  );
}

export default App;
