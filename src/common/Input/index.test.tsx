import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, vi, it } from "vitest";
import { Input } from ".";

describe("Input Component", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Input label="Username" value="" />);
    const inputElement = getByLabelText("Username") as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
  });

  it("handles value change", () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(
      <Input label="Username" value="" onChange={handleChange} />
    );
    const inputElement = getByLabelText("Username") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "john.doe" } });

    expect(handleChange).toHaveBeenCalledWith("john.doe");
  });

  it("is disabled when disabled prop is true", () => {
    const { getByLabelText } = render(
      <Input label="Username" value="john.doe" disabled />
    );
    const inputElement = getByLabelText("Username") as HTMLInputElement;

    expect(inputElement).toBeDisabled();
  });

  it("is not disabled when disabled prop is false", () => {
    const { getByLabelText } = render(
      <Input label="Username" value="john.doe" />
    );
    const inputElement = getByLabelText("Username") as HTMLInputElement;

    expect(inputElement).not.toBeDisabled();
  });
});
