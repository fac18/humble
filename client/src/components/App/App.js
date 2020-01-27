import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import getRequest from "../../utils/getRequest";

function App() {
  const [dan, setDan] = useState(null);

  useEffect(() => {
    getRequest("/get-member?member_id=3").then(res => {
      setDan(res.member_name);
    });
  }, []);

  return (
    <div className="app">
      <p>This is our app.</p>
      {dan ? <p>One of the members is called {dan}.</p> : null}
    </div>
  );
}

export default App;
