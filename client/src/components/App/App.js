import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// import page-level components
import Landing from "../Landing/Landing";
import About from "../About/About";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

// import utils for API call
import getRequest from "../../utils/getRequest";

const App = () => {
  const [memberId, setMemberId] = useState(4); // hard code user
  const [member, setMember] = useState(null);

  useEffect(() => {
    getRequest(`/get-profile?member_id=${memberId}`).then(res => {
      setMember({
        name: res[0].member_name,
        avatar: res[0].avatar_url,
        email: res[0].email,
        postcode: res[0].postcode,
        offers: res[1],
        requests: res[2]
      });
    });
  }, [memberId]);

  return (
    <main className="app">
      <Switch>
        <Route path="/" exact render={props => <Landing {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/search" render={props => <Search {...props} />} />
        <Route
          path="/profile"
          render={props => <Profile {...props} member={member} />}
        />
      </Switch>
    </main>
  );
};

export default App;
