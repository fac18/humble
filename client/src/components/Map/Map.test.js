import React from "react";
import { render } from "@testing-library/react";
import Map from "./Map";

test("component works as expected", () => {
  const { getByText } = render(<Map />);
});
