import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
// import { CacheProvider } from '@emotion/react'
// import createCache from '@emotion/cache'
//import { Box } from "@mui/material";
// import { prefixer } from 'stylis'
//import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes/routes";
//import "styles/styles.scss";

const App = () => {
  useEffect(() => {
    localStorage.setItem('language', "en")
  }, []);

  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
