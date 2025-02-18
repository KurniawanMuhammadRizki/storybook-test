import { Theme } from "@chakra-ui/react";
import "./App.css";
import { UserData } from "./components/table/types";
import { UserTable } from "./components/table/UserTable";

function App() {
  const data: UserData[] = [
    {
      name: "Emma Thompson",
      email: "emma.thompson@email.com",
      role: "Primary Admin",
    },
    { name: "Liam Carter", email: "liam.carter@email.com", role: "Co-Admin" },
    { name: "Olivia Kim", email: "oliviakim@email.com", role: "Marketing" },
  ];

  return (
    <>
      <Theme p="4" appearance="light" colorPalette="teal">
        <UserTable data={data} />
      </Theme>
    </>
  );
}

export default App;
