import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

//import components
import Landing from "../Landing";
import About from "../About";
import Search from "../Search";
import Profile from "../Profile";
import Error from "../Error";
import P from "../styled/P";
import Container from "../styled/Container";

import getRequest from "../../utils/getRequest";

//import getRequest from "../../utils/getRequest";

function App() {
  
  // const [dan, setDan] = useState(null);
 //
 // useEffect(() => {
   // getRequest("/get-member?member_id=3").then(res => {
     // setDan(res.member_name);
   // });
 // }, []);
  
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route component={Error} />
      </Switch>
    </main>

    // <div className="app">
    //   <Container>
    //     <P size="--space-lg">This is our app.</P>
    //     {dan ? <P>One of the members is called {dan}.</P> : null}
    //   </Container>
    // </div>
  );
}

export default App;
