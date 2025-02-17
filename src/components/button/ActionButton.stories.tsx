import { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "./ActionButton";
import { Provider } from "../ui/provider";

export default {
  title: "Components/ActionButton",
  component: ActionButton,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    backgrounds: { disable: true },
  },
} as Meta<typeof ActionButton>;

export const Default: StoryObj<typeof ActionButton> = {
  args: {
    onClick: () => alert("Button clicked!"),
  },
};
