import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import AllBreeds from "./AllBreeds.component";

jest.mock("../Spinner/Spinner.component");
jest.mock("../ErrorPage/ErrorPage.component");

describe("AllBreeds", () => {
  test("should render breeds", () => {
    const tree = renderer
      .create(
        <Router>
          <AllBreeds
            isLoaded
            error={null}
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

  test("should render spinner", () => {
    const tree = renderer
      .create(
        <Router>
          <AllBreeds isLoaded={false} error={null} breeds={[]} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render error", () => {
    const tree = renderer
      .create(
        <Router>
          <AllBreeds
            isLoaded
            error={{ status: 404, statusText: "Not found" }}
            breeds={[]}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
