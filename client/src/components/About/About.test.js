import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

test("component works as expected", () => {
  const { getByText } = render(<About />);
});
