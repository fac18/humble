import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import getRequest from "../../utils/getRequest";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route path="/dan" component={Dan} />
      </Switch>
    </main>
  );
}

export default App;

/*const [dan, setDan] = useState(null); useEffect(() =>{" "}
        {getRequest("/get-member?member_id=3").then(res => {
          setDan(res.member_name);
        })}
        , []); return (
        <div className="app">
          <p>This is our app.</p>
          {dan ? <p>One of the members is called {dan}.</p> : null}
        </div>
        );*/
