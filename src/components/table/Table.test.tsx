import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "@/components/ui/provider";
import { UserTable } from "./UserTable";
import { vi } from "vitest";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const renderWithChakra = (component: React.ReactElement) => {
  return render(<Provider>{component}</Provider>);
};

describe("UserTableComponent", () => {
  it("should display the header correctly", () => {
    renderWithChakra(<UserTable data={[]} />);
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
    renderWithChakra(<UserTable data={data} />);
    data.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.role)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("row")).toHaveLength(data.length + 1);
  });

  it("should handle empty data array", () => {
    renderWithChakra(<UserTable data={[]} />);
    expect(screen.getAllByRole("row")).toHaveLength(1);
  });

  it("should render correct number of rows", () => {
    const data = [{ name: "Test User", email: "test@email.com", role: "User" }];
    renderWithChakra(<UserTable data={data} />);
    expect(screen.getAllByRole("row")).toHaveLength(2);
  });
});

