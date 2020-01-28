import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("component works as expected", () => {
  const { getByText } = render(<Navbar />);
});
