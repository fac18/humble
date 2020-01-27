import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";
import App from "../App/App";

test("profile page renders something", () => {
  const { getByText } = render(<App />);
  getByText("My offers");
});
