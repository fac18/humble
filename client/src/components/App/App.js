import React, { useState, useEffect } from "react";
import "./App.css";

import P from "../styled/P";
import Container from "../styled/Container";

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
      <Container>
        <P size="--space-lg">This is our app.</P>
        {dan ? <P>One of the members is called {dan}.</P> : null}
      </Container>
    </div>
  );
}

export default App;
