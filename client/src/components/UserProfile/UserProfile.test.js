import React from "react";
import { render } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("userProfile page renders something", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <UserProfile />
    </Router>
  );
  getByText("Profile");
});
