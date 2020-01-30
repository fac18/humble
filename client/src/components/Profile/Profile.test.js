import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("profile page renders something", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Profile />
    </Router>
  );
  getByText("My offers:");
});
