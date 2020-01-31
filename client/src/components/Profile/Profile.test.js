import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("profile page renders my offers", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Profile />
    </Router>
  );
  getByText("My offers:");
});

test("profile page renders my requests", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Profile />
    </Router>
  );
  getByText("My requests:");
});
