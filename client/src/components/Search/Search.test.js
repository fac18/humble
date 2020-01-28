import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

test("component works as expected", () => {
  const { getByText } = render(<Search />);
});
