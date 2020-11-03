import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "./App.component";

jest.mock("../AllBreeds/AllBreeds.component");

describe("App", () => {
  test("should render all breeds", () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={["/"]} initialIndex={0}>
          <App />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
