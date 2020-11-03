import React from "react";
import renderer from "react-test-renderer";
import ErrorBoundary from "./ErrorBoundary.component";

const ErrorChild = () => {
  throw new Error("Component with error");
};

const Child = () => <div>Child</div>;

describe("ErrorBoundary", () => {
  test("should render an error", () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <ErrorChild />
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render child", () => {
    const tree = renderer
      .create(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
