import React, { useState, useEffect } from "react";
import "./App.css";

import Paragraph from "../styled/Paragraph";

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
      <Paragraph>This is our app.</Paragraph>
      {dan ? <Paragraph>One of the members is called {dan}.</Paragraph> : null}
    </div>
  );
}

export default App;
