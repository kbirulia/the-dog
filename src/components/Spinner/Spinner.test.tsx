import React from "react";
import renderer from "react-test-renderer";
import Spinner from "./Spinner.component";

describe("Spinner", () => {
  test("should render correctly", () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
