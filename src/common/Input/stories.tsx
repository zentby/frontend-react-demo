import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    value: "john.doe",
    disabled: true,
  },
};
