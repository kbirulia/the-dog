import React from "react";
import renderer from "react-test-renderer";
import FetchResults from "./FetchResults.component";

jest.mock("../Spinner/Spinner.component");
jest.mock("../ErrorPage/ErrorPage.component");

describe("FetchResults", () => {
  test("should render children", () => {
    const tree = renderer
      .create(
        <FetchResults isLoaded error={null}>
          Child
        </FetchResults>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render error", () => {
    const tree = renderer
      .create(
        <FetchResults isLoaded error={{ status: 404, statusText: "Not found" }}>
          Child
        </FetchResults>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render spinner", () => {
    const tree = renderer
      .create(
        <FetchResults isLoaded={false} error={null}>
          Child
        </FetchResults>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
