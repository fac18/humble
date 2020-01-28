import React from "react";
import { render } from "@testing-library/react";
import Landing from "./Landing";

test("component works as expected", () => {
  const { getByText } = render(<Landing />);
  getByText("humble");
});
