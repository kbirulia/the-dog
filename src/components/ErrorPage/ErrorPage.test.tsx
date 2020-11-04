import React from "react";
import renderer from "react-test-renderer";
import ErrorPage from "./ErrorPage.component";

jest.mock("../AllBreeds/AllBreeds.component");

describe("Error", () => {
  test("should render all breeds", () => {
    const tree = renderer.create(<ErrorPage title="Some title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
