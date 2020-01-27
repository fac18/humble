import React, { useState, useEffect } from "react";
import "./App.css";

import getRequest from "../../utils/getRequest";

function App() {
  const [memberName, setMemberName] = useState(1);
  const [interactions, setInteractions] = useState(null);

  useEffect(() => {
    getRequest(`/get-member?member_id=${memberName}`).then(res => {
      setMemberName(res.member_name);
    });
  }, []);

  useEffect(() => {
    getRequest(`/get-interaction?member_id=${memberName}`).then(res => {
      setInteractions(res.length);
    });
  });

  return (
    <div className="app">
      <p>This is our app.</p>
      {memberName ? <p>One of the members is called {memberName}.</p> : null}
      {interactions ? (
        <p>
          {memberName} has had {interactions} interactions.
        </p>
      ) : null}
    </div>
  );
}

export default App;
