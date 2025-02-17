import { Table, Tag, TagLabel } from "@chakra-ui/react";
import { UserData } from "./types";

interface UserTableProps {
  data: UserData[];
}

export const UserTable: React.FC<UserTableProps> = ({ data }) => {
  const roleColors: Record<string, { bg: string; color: string }> = {
    "Primary Admin": { bg: "#3A3A3C1F", color: "#3A3A3C" },
    "Co-Admin": { bg: "#6A58971F", color: "#6A5897" },
    Marketing: { bg: "#C55C1D1F", color: "#C55C1D" },
    Sales: { bg: "#E0A7581F", color: "yellow.500" },
  };

  return (
    <Table.Root size="sm" variant="outline">
      <Table.Header background="gray.100">
        <Table.Row>
          <Table.ColumnHeader
            padding="10px 12px"
            fontWeight="500"
            width={["auto", "320px"]}>
            Name
          </Table.ColumnHeader>

          <Table.ColumnHeader
            padding="10px 12px"
            fontWeight="500"
            width={["auto", "600px"]}>
            Email
          </Table.ColumnHeader>

          <Table.ColumnHeader
            padding="10px 12px"
            fontWeight="500"
            width={["auto", "200px"]}
            textAlign="center">
            Role
          </Table.ColumnHeader>

          <Table.ColumnHeader
            padding="10px 12px"
            fontWeight="500"
            width={["auto", "80px"]}>
            Action
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell padding="26px 12px" fontWeight="400">
              {item.name}
            </Table.Cell>
            <Table.Cell padding="26px 12px" fontWeight="400">
              {item.email}
            </Table.Cell>
            <Table.Cell textAlign="center" padding="26px 12px" fontWeight="400">
              <Tag.Root
                bg={roleColors[item.role]?.bg || "gray.200"}
                color={roleColors[item.role]?.color || "gray.600"}
                borderRadius="20px"
                padding="4px 8px"
                variant="subtle">
                <Tag.Label>{item.role}</Tag.Label>
              </Tag.Root>
            </Table.Cell>
            <Table.Cell textAlign="center" padding="26px 12px">
              action btn
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
