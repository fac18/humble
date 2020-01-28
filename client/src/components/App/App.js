import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//import page-level components
import Landing from "../Landing/Landing";
import About from "../About/About";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import Navbar from "../Navbar/Navbar";

// import utils for API call
import getRequest from "../../utils/getRequest";

function App() {
  // any states that should be available to all components need to be initialised here
  const [user, setUser] = useState(null);

  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>

      <Navbar />
    </main>
  );
}

export default App;
