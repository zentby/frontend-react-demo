import { Meta, StoryObj } from "@storybook/react";
import { PasswordResetForm } from "./";

export default {
  title: "Components/PasswordResetForm",
  component: PasswordResetForm,
} as Meta;

type Story = StoryObj<typeof PasswordResetForm>;

export const Default: Story = {
  args: {
    onReset: (newPassword: string) => {
      console.log(`Password reset with new password: ${newPassword}`);
    },
  },
};
