import { renderHook } from "@testing-library/react-hooks";
import useFetch from "./useFetch.hook";

describe("useFetch", () => {
  test("should return data with a successful request", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => "data",
      })
    );
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("", "someUrl")
    );

    expect(result.current).toMatchObject({
      error: null,
      isLoaded: false,
      data: "",
    });
    await waitForNextUpdate();
    expect(result.current).toMatchObject({
      error: null,
      isLoaded: true,
      data: "data",
    });
  });

  test("should return error with an error request", async () => {
    const mockError = {
      status: 404,
      statusText: "Not found",
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        ...mockError,
      })
    );
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("", "someUrl")
    );

    expect(result.current).toMatchObject({
      error: null,
      isLoaded: false,
      data: "",
    });
    await waitForNextUpdate();
    expect(result.current).toMatchObject({
      error: mockError,
      isLoaded: true,
      data: "",
    });
  });
});
