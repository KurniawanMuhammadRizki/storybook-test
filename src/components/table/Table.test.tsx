import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserTable } from "./Table";

describe("UserTableComponent", () => {
  it("should display the header correctly", () => {
    render(<UserTable data={[]} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Role")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("should display data in a table", () => {
    const data = [
      {
        name: "Emma Thompson",
        email: "emma.thompson@email.com",
        role: "Primary Admin",
      },
      { name: "Liam Carter", email: "liam.carter@email.com", role: "Co-Admin" },
      { name: "Olivia Kim", email: "oliviakim@email.com", role: "Marketing" },
    ];

    render(<UserTable data={data} />);
    expect(screen.getByText("Emma Thompson")).toBeInTheDocument();
    expect(screen.getByText("emma.thompson@email.com")).toBeInTheDocument();
    expect(screen.getByText("Primary Admin")).toBeInTheDocument();
    expect(screen.getByText("Liam Carter")).toBeInTheDocument();
    expect(screen.getByText("liam.carter@email.com")).toBeInTheDocument();
    expect(screen.getByText("Co-Admin")).toBeInTheDocument();
    expect(screen.getByText("Olivia Kim")).toBeInTheDocument();
    expect(screen.getByText("oliviakim@email.com")).toBeInTheDocument();
    expect(screen.getByText("Marketing")).toBeInTheDocument();
  });
});
