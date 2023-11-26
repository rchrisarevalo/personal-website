import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

// Rendering was update to accommodate new React.js version (v18.0.0 and greater)
const app = document.getElementById('root')
const rt_rend = createRoot(app)

rt_rend.render(
<React.StrictMode>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
</React.StrictMode>
  // <HashRouter>
  //   <App />
  // </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
