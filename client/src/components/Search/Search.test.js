import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("search component renders category dropdown text as expected", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Search />
    </Router>
  );
  getByText("Choose a category");
});

test("search page renders 'to share' or 'help with' button", () => {
  const history = createMemoryHistory();
  const { queryByText } = render(
    <Router history={history}>
      <Search />
    </Router>
  );
  const button = queryByText("help with");
  expect(button).toBeInTheDocument();
});
