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
  getByText("Search your area");
});

// test("userProfile page renders 'back to search' button", () => {
//   const history = createMemoryHistory();
//   const { queryByText } = render(
//     <Router history={history}>
//       <UserProfile />
//     </Router>
//   );
//   const button = queryByText("Back to Search");
//   expect(button).toBeInTheDocument();
// });
