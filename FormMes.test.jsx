import { FormMes } from "./FormMes";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("FormMes", () => {
  it("render form", () => {
    render(<FormMes />);
  });

  it("button in component", () => {
    render(<Form />);
    expect(screen.getByRole("button")).toBeInTheDocument;
  });

  it("onChange in input author", () => {
    render(<Form onChange={onChange} />);
    userEvent.type(screen.getAllByRole("textbox"), "hello");
    expect(onChange).toHaveBeenCalled;
  });
});