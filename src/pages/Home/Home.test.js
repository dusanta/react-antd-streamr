import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Home from "./Home";

test("it renders empty table initially", async () => {
  render(<Home />);
  const rows = await screen.findAllByRole("row", {});

  expect(rows.length).toBe(2);
});

test("it renders 25 body and 1 head rows of table", async () => {
  render(<Home />);

  await waitFor(
    async () => {
      const rows = await screen.findAllByRole("row");
      return expect(rows.length).toBe(26);
    },
    { timeout: 10000 }
  );
});

test("it shows 0 selected items initially", async () => {
  render(<Home />);

  const selected = screen.getByText("0 products selected");

  expect(selected.textContent).toBe("0 products selected");
});

test("it shows 1 selected items after selecting a cell", async () => {
  render(<Home />);

  let checkboxes = [];

  await waitFor(
    async () => {
      checkboxes = await screen.findAllByRole("checkbox");
      return expect(checkboxes.length).toBe(26);
    },
    { timeout: 10000 }
  );

  act(() => {
    userEvent.click(checkboxes[1]);
  });

  const selected = screen.getByText("1 products selected");

  expect(selected.textContent).toBe("1 products selected");
});
