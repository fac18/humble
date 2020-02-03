import React from "react";
import { render } from "@testing-library/react";
import List from "./List";
import { Router } from "react-router-dom";

test("component works as expected", () => {
  const cards = [
    {
      category_id: 1,
      member_id: 1,
      member_name: "Kin",
      postcode: "N44QR",
      offer_name: "cooking",
      request_name: "swimming"
    }
  ];

  const { getByText } = render(<List cards={cards} />);
  getByText("Kin");
});
