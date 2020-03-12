import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";

import fetchProducts from "services/fetchProducts";
import { mockResult } from "services/__mocks__/data";
import { CompareContextProvider } from "context/CompareContextProvider";
import Compare from "./Compare";

jest.mock("services/fetchProducts");

describe("Compare", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show 2 selected products ", async () => {
    fetchProducts.mockResolvedValue(mockResult);

    await act(async () => {
      const { getByText, getAllByRole, queryByText } = render(
        <CompareContextProvider>
          <Compare />
        </CompareContextProvider>
      );
      await wait(() =>
        // data loaded
        expect(getByText("2 producten vergelijken")).toBeInTheDocument()
      );
      // 4 checkboxes, 2 checked
      expect(getAllByRole("checkbox")).toHaveLength(4);
      expect(getAllByRole("checkbox").filter(ch => ch.checked)).toHaveLength(2);

      // first 2 items visible, other 2 don't
      expect(queryByText("115E19")).toBeInTheDocument();
      expect(queryByText("11545A")).toBeInTheDocument();
      expect(queryByText("115E1A")).toBeNull();
      expect(queryByText("115576")).toBeNull();

      expect(fetchProducts).toHaveBeenCalledTimes(1);
    });
  });

  it("should handle click", async () => {
    fetchProducts.mockResolvedValue(mockResult);

    await act(async () => {
      const { getByText, getAllByRole, queryByText } = render(
        <CompareContextProvider>
          <Compare />
        </CompareContextProvider>
      );
      await wait(() =>
        // data loaded
        expect(getByText("2 producten vergelijken")).toBeInTheDocument()
      );

      // click first checkbox
      fireEvent.click(getAllByRole("checkbox")[0]);

      // 4 checkboxes, 1 checked
      expect(getAllByRole("checkbox").filter(ch => ch.checked)).toHaveLength(1);

      // first invisible
      expect(queryByText("115E19")).toBeNull();

      // click third checkbox
      fireEvent.click(getAllByRole("checkbox")[2]);

      // 4 checkboxes, 2 checked
      expect(getAllByRole("checkbox").filter(ch => ch.checked)).toHaveLength(2);

      // third visible
      expect(queryByText("115E1A")).toBeInTheDocument();
    });
  });
});
