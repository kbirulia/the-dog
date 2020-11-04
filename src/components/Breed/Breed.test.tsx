import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Breed from "./Breed.component";

describe("Breed", () => {
  test("should render breed", () => {
    const tree = renderer
      .create(
        <Router>
          <Breed
            breed={{
              weight: {
                imperial: "44 - 66",
                metric: "20 - 30",
              },
              height: {
                imperial: "30",
                metric: "76",
              },
              id: 3,
              name: "African Hunting Dog",
              bred_for: "A wild pack animal",
              life_span: "11 years",
              temperament: "Wild, Hardworking, Dutiful",
              origin: "",
            }}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
