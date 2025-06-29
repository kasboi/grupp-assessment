import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideBar from "../../SideBar/SideBar";

// Mock the heroicons
vi.mock("@heroicons/react/20/solid", () => ({
  MagnifyingGlassIcon: () => <div data-testid="search-icon">Search</div>,
  XMarkIcon: () => <div data-testid="close-icon">Close</div>,
}));

// Mock the Icon components
vi.mock("../Icon", () => ({
  HomeIcon: () => <div data-testid="home-icon">Home</div>,
  ChartIcon: () => <div data-testid="chart-icon">Chart</div>,
  LayerIcon: () => <div data-testid="layer-icon">Layer</div>,
  TaskIcon: () => <div data-testid="task-icon">Task</div>,
  FlagIcon: () => <div data-testid="flag-icon">Flag</div>,
  UserIcon: () => <div data-testid="user-icon">User</div>,
  SupportIcon: () => <div data-testid="support-icon">Support</div>,
  SettingsIcon: () => <div data-testid="settings-icon">Settings</div>,
  ExitIcon: () => <div data-testid="exit-icon">Exit</div>,
}));

// Mock the components
vi.mock("../Logo", () => ({
  Logo: ({ Logo }) => <div data-testid="logo">Logo</div>,
}));

vi.mock("../Input", () => ({
  Input: ({ placeholder }) => (
    <input data-testid="search-input" placeholder={placeholder} />
  ),
}));

describe("SideBar Component", () => {
  const mockProps = {
    visible: true,
    setVisible: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders sidebar with all navigation items", () => {
    render(<SideBar {...mockProps} />);

    expect(screen.getAllByText("Home")).toHaveLength(2); // Icon and label both have "Home"
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Tasks")).toBeInTheDocument();
    expect(screen.getByText("Reporting")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("displays dashboard badge", () => {
    render(<SideBar {...mockProps} />);

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("renders support and settings buttons", () => {
    render(<SideBar {...mockProps} />);

    expect(screen.getAllByText("Support")).toHaveLength(2); // Icon and label
    expect(screen.getAllByText("Settings")).toHaveLength(2); // Icon and label
  });

  it("renders new features section", () => {
    render(<SideBar {...mockProps} />);

    expect(screen.getByText("New features available!")).toBeInTheDocument();
    expect(
      screen.getByText(/Check out the new dashboard view/),
    ).toBeInTheDocument();
    expect(screen.getByText("Dismiss")).toBeInTheDocument();
    expect(screen.getByText("What's new?")).toBeInTheDocument();
  });

  it("renders user profile section", () => {
    render(<SideBar {...mockProps} />);

    expect(screen.getByText("Olivia Rhye")).toBeInTheDocument();
    expect(screen.getByText("olivia@untitledui.com")).toBeInTheDocument();
  });

  it("shows sidebar when visible is true", () => {
    render(<SideBar visible={true} setVisible={mockProps.setVisible} />);

    const sidebar = screen.getByText("Dashboard").closest("div").parentElement;
    expect(sidebar).toHaveClass("translate-x-0");
  });

  it("hides sidebar when visible is false", () => {
    render(<SideBar visible={false} setVisible={mockProps.setVisible} />);

    const sidebar = screen.getByText("Dashboard").closest("div").parentElement;
    expect(sidebar).toHaveClass("-translate-x-full");
  });

  it("applies correct responsive classes", () => {
    render(<SideBar {...mockProps} />);

    const sidebar = screen.getByText("Dashboard").closest("div").parentElement;
    expect(sidebar).toHaveClass("lg:translate-x-0", "lg:relative", "fixed");
  });

  it("has smooth transition animation", () => {
    render(<SideBar {...mockProps} />);

    const sidebar = screen.getByText("Dashboard").closest("div").parentElement;
    expect(sidebar).toHaveClass(
      "transition-transform",
      "duration-300",
      "ease-in-out",
    );
  });

  it("renders search input with correct placeholder", () => {
    render(<SideBar {...mockProps} />);

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toHaveAttribute("placeholder", "Oliver Rhye");
  });
});
