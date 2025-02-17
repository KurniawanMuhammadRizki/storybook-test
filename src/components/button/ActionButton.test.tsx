import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

import { Provider } from "@/components/ui/provider";
import userEvent from "@testing-library/user-event";
import { ActionButton } from "./ActionButton";

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

describe("ActionButton Component", () => {
  it("should render the button", () => {
    renderWithChakra(<ActionButton />);
    const button = screen.getByRole("button", { name: /actions/i });
    expect(button).toBeInTheDocument();
  });

  it("should have correct styles", () => {
    renderWithChakra(<ActionButton />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({
      width: "32px",
      height: "32px",
      background: "transparent",
    });
  });

  it("should apply hover effect", async () => {
    renderWithChakra(<ActionButton />);
    const button = screen.getByRole("button");

    await userEvent.hover(button);
    expect(button).toHaveStyle("background: gray.100");
  });

  it("should apply active (click) effect", async () => {
    renderWithChakra(<ActionButton />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(button).toHaveStyle("background: gray.200");
  });

  it("should not have focus outline", async () => {
    renderWithChakra(<ActionButton />);
    const button = screen.getByRole("button");

    await userEvent.tab();
    expect(button).not.toHaveStyle("box-shadow: none");
  });
});
