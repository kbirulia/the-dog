import React from "react";
import renderer from "react-test-renderer";
import AllBreeds from "./AllBreeds.component";

jest.mock("../Spinner/Spinner.component");

describe("AllBreeds", () => {
  test("should render breeds", () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render spinner", () => {
    const tree = renderer
      .create(<AllBreeds isLoaded={false} error={null} breeds={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should render error", () => {
    const tree = renderer
      .create(<AllBreeds isLoaded error="Some error" breeds={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
