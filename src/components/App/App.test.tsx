import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import App from "./App.component";

jest.mock("../AllBreeds/AllBreeds.component");
jest.mock("../ErrorPage/ErrorPage.component");
jest.mock("../ErrorBoundary/ErrorBoundary.component");
jest.mock("../Header/Header.component");

describe("App", () => {
  test("should render page not found", () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={["/"]} initialIndex={1}>
          <App />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
