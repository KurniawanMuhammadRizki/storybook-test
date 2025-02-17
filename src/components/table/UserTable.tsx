import { Table } from "@chakra-ui/react";
import { UserData } from "./types";

interface UserTableProps {
  data: UserData[];
}

export const UserTable: React.FC<UserTableProps> = ({ data }) => {
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Role</Table.ColumnHeader>
          <Table.ColumnHeader>Action</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>{item.role}</Table.Cell>
            <Table.Cell textAlign="end">action btn</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
