import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("search component renders 'search your area' text as expected", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Search />
    </Router>
  );
  getByText("Search your area");
});
