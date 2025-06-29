import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Mock all the imported components
vi.mock("../SideBar", () => ({
  default: ({ visible, setVisible }) => (
    <div data-testid="sidebar" data-visible={visible}>
      <button onClick={() => setVisible(!visible)}>Toggle Sidebar</button>
    </div>
  ),
}));

vi.mock("../Settings", () => ({
  default: ({ setVisible }) => (
    <div data-testid="settings">
      <button onClick={() => setVisible(false)}>Close Settings</button>
    </div>
  ),
}));

vi.mock("../NavBar/NavBar", () => ({
  default: ({ visible, setVisible }) => (
    <div data-testid="navbar">
      <button onClick={() => setVisible(!visible)}>Toggle Nav</button>
    </div>
  ),
}));

describe("App Component", () => {
  it("renders all main components", () => {
    render(<App />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("settings")).toBeInTheDocument();
  });

  it("initializes with sidebar not visible", () => {
    render(<App />);

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveAttribute("data-visible", "false");
  });

  it("toggles sidebar visibility when navbar button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const navToggleButton = screen.getByText("Toggle Nav");
    const sidebar = screen.getByTestId("sidebar");

    // Initially not visible
    expect(sidebar).toHaveAttribute("data-visible", "false");

    // Click to make visible
    await user.click(navToggleButton);
    expect(sidebar).toHaveAttribute("data-visible", "true");

    // Click again to hide
    await user.click(navToggleButton);
    expect(sidebar).toHaveAttribute("data-visible", "false");
  });

  it("toggles sidebar visibility when sidebar button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const sidebarToggleButton = screen.getByText("Toggle Sidebar");
    const sidebar = screen.getByTestId("sidebar");

    // Initially not visible
    expect(sidebar).toHaveAttribute("data-visible", "false");

    // Click to make visible
    await user.click(sidebarToggleButton);
    expect(sidebar).toHaveAttribute("data-visible", "true");
  });

  it("closes sidebar when settings close button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    const navToggleButton = screen.getByText("Toggle Nav");
    const settingsCloseButton = screen.getByText("Close Settings");
    const sidebar = screen.getByTestId("sidebar");

    // First make sidebar visible
    await user.click(navToggleButton);
    expect(sidebar).toHaveAttribute("data-visible", "true");

    // Then close via settings
    await user.click(settingsCloseButton);
    expect(sidebar).toHaveAttribute("data-visible", "false");
  });

  it("has correct layout structure", () => {
    render(<App />);

    const app = screen.getByTestId("navbar").closest(".App");
    expect(app).toHaveClass("App", "relative", "overflow-hidden");

    const flexContainer = screen.getByTestId("sidebar").closest(".flex");
    expect(flexContainer).toHaveClass("flex", "w-full");
  });

  it("maintains state consistency across components", async () => {
    const user = userEvent.setup();
    render(<App />);

    const navToggleButton = screen.getByText("Toggle Nav");
    const sidebarToggleButton = screen.getByText("Toggle Sidebar");
    const sidebar = screen.getByTestId("sidebar");

    // Test multiple state changes
    await user.click(navToggleButton); // true
    await user.click(sidebarToggleButton); // false
    await user.click(navToggleButton); // true

    expect(sidebar).toHaveAttribute("data-visible", "true");
  });
});
