import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }, // Use the action parameter to log the click event
  },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { label: "Click" },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};
