import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import AllBreeds from "./AllBreeds.component";

describe("AllBreeds", () => {
  test("should render breeds", () => {
    const tree = renderer
      .create(
        <Router>
          <AllBreeds
            breeds={[
              {
                id: 1,
                name: "African Hunting Do",
              },
              {
                id: 2,
                name: "Airedale Terrier",
              },
            ]}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
