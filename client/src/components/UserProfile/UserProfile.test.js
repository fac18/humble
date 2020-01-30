import React from "react";
import { render } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("userProfile page renders something", () => {
  const history = createMemoryHistory();
  const { getByText, debug } = render(
    <Router history={history}>
      <UserProfile />
    </Router>
  );
  const profile = getByText("User Profile");
  debug(profile);
  expect(profile).toBeInTheDocument();
});
