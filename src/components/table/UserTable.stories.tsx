import { Meta, StoryObj } from "@storybook/react";
import { UserTable } from "./UserTable";
import { Provider } from "../ui/provider";

export default {
  title: "Components/Table",
  component: UserTable,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

export const UserTableComponent: StoryObj<typeof UserTable> = {
  args: {
    data: [
      {
        name: "Emma Thompson",
        email: "emma.thompson@email.com",
        role: "Primary Admin",
      },
      { name: "Liam Carter", email: "liam.carter@email.com", role: "Co-Admin" },
      { name: "Olivia Kim", email: "oliviakim@email.com", role: "Marketing" },
    ],
  },
};
