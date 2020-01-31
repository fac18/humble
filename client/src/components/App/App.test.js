import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("component works as expected", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  getByText("What is humble?");
});
