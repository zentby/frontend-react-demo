import { render, fireEvent } from "@testing-library/react";
import { describe, expect, vi, it } from "vitest";
import { Button } from ".";

describe("Button Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button label="Click" />);
    const buttonElement = getByText("Click");

    expect(buttonElement).toBeInTheDocument();
  });

  it("handles click event", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button label="Click" onClick={handleClick} />
    );
    const buttonElement = getByText("Click");

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    const { getByText } = render(<Button label="Disabled" disabled />);
    const buttonElement = getByText("Disabled");

    expect(buttonElement).toBeDisabled();
  });

  it("is not disabled when disabled prop is false", () => {
    const { getByText } = render(<Button label="Click" />);
    const buttonElement = getByText("Click");

    expect(buttonElement).not.toBeDisabled();
  });
});
