import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

test("profile page renders something", () => {
  const { getByText } = render(<Profile />);
  getByText("My offers");
});
