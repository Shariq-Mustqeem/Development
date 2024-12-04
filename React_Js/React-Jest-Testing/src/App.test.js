import { render, screen } from "@testing-library/react";
import App from "./App";
test("should be title of Name", () => {
  render(<App />);
  const text = screen.getByText(/Hi My Name Is Shariq/i);
  const image = screen.getByTitle(/Ai Image/i);
  expect(text).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("should Type Of Input", () => {
  render(<App />);
  let check = screen.getByRole("textbox");
  let checkPlaceholder = screen.getByPlaceholderText(/enter name/i);

  expect(check).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(check).toHaveAttribute("id", "name");
  expect(check).toHaveAttribute("type", "text");
  expect(check).toHaveAttribute("name", "username");
});

describe("ui test group", () => {
  test("test case 1", () => {
    render(<App />);
    let input = screen.getAllByRole("textbox");
  });
});

test("test for mock api", async () => {
  render(<App />);
  const el = await screen.findAllByRole("listitem");
  expect(el).toHaveLength(3);
});
