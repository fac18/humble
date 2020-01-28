import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

test("component works as expected", () => {
  const { getByText } = render(<Error />);
});
