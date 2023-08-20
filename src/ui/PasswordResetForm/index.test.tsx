import { render, fireEvent } from "@testing-library/react";
import { describe, expect, vi, it } from "vitest";
import { PasswordResetForm } from ".";

describe("PasswordResetForm Component", () => {
  it.each([
    ["_12345678)", true],
    ["1password!!", true],
    ["thisisverylongforpasswordentropy", true],
    ["=-)(*&^%$#@!9", true],
    ["=-932", true],
    ["12345678", false],
    ["abcdefgh", false],
  ])("%s is valid: %s", (password: string, valid: boolean) => {
    const { getByLabelText, getByText } = render(
      <PasswordResetForm onReset={() => vi.fn()} />
    );
    const passwordInput = getByLabelText("New Password") as HTMLInputElement;
    const resetButton = getByText("Reset") as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: password } });

    if (valid) {
      expect(resetButton).toBeEnabled();
    } else {
      expect(resetButton).not.toBeEnabled();
    }
  });

  it("disables reset button when password is invalid", () => {
    const { getByLabelText, getByText } = render(
      <PasswordResetForm onReset={() => vi.fn()} />
    );
    const passwordInput = getByLabelText("New Password") as HTMLInputElement;
    const resetButton = getByText("Reset") as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: "invalid" } });

    expect(resetButton).toBeDisabled();
  });

  it("calls onReset with valid password when reset button is clicked", () => {
    const mockOnReset = vi.fn();
    const { getByLabelText, getByText } = render(
      <PasswordResetForm onReset={mockOnReset} />
    );
    const passwordInput = getByLabelText("New Password") as HTMLInputElement;
    const resetButton = getByText("Reset") as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: "P_@ssw0rd" } });
    fireEvent.click(resetButton);

    expect(mockOnReset).toHaveBeenCalledWith("P_@ssw0rd");
  });

  it("does not call onReset with invalid password when reset button is clicked", () => {
    const mockOnReset = vi.fn();
    const { getByLabelText, getByText } = render(
      <PasswordResetForm onReset={mockOnReset} />
    );
    const passwordInput = getByLabelText("New Password") as HTMLInputElement;
    const resetButton = getByText("Reset") as HTMLButtonElement;

    fireEvent.change(passwordInput, { target: { value: "invalid" } });
    fireEvent.click(resetButton);

    expect(mockOnReset).not.toHaveBeenCalled();
  });
});
