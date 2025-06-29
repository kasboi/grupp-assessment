import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Settings from "../../Settings/Settings";

// Mock all the imported components
vi.mock("../DropdownList", () => ({
  DropdownList: ({ details }) => (
    <div data-testid="dropdown-list">Dropdown List</div>
  ),
}));

vi.mock("../ActiveRole", () => ({
  ActiveRole: () => <div data-testid="active-role">Active Role</div>,
}));

vi.mock("../ActiveMail", () => ({
  ActiveMail: () => <div data-testid="active-mail">Active Mail</div>,
}));

vi.mock("../Dropdown", () => ({
  Dropdown: ({ details }) => <div data-testid="dropdown">Dropdown</div>,
}));

vi.mock("../Icon", () => ({
  DownloadIcon: () => <div data-testid="download-icon">Download</div>,
}));

vi.mock("../Table", () => ({
  default: () => <div data-testid="table">Table Component</div>,
}));

vi.mock("@heroicons/react/20/solid", () => ({
  EnvelopeIcon: () => <div data-testid="envelope-icon">Envelope</div>,
}));

describe("Settings Component", () => {
  const mockProps = {
    setVisible: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders main settings heading and description", () => {
    render(<Settings {...mockProps} />);

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(
      screen.getByText("Manage your team and preferences here."),
    ).toBeInTheDocument();
  });

  it("renders user roles section", () => {
    render(<Settings {...mockProps} />);

    expect(screen.getByText("User Roles")).toBeInTheDocument();
  });

  it("renders download all button", () => {
    render(<Settings {...mockProps} />);

    const downloadButton = screen.getByText("Download all");
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton.closest("button")).toHaveClass(
      "bg-white",
      "flex",
      "items-center",
      "border-2",
    );
  });

  it("renders all imported components", () => {
    render(<Settings {...mockProps} />);

    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
    expect(screen.getByTestId("active-mail")).toBeInTheDocument();
    expect(screen.getByTestId("active-role")).toBeInTheDocument();
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("download-icon")).toBeInTheDocument();
  });

  it("calls setVisible when clicking on main container", async () => {
    const user = userEvent.setup();
    render(<Settings {...mockProps} />);

    const container = screen.getByText("Settings").closest("div");
    await user.click(container);

    expect(mockProps.setVisible).toHaveBeenCalledWith(false);
  });

  it("has correct responsive layout classes", () => {
    render(<Settings {...mockProps} />);

    const container = screen.getByText("Settings").closest("div").parentElement;
    expect(container).toHaveClass(
      "px-4",
      "lg:px-12",
      "lg:py-4",
      "flex-1",
      "overflow-hidden",
      "bg-neutral-100",
    );
  });

  it("has correct heading typography", () => {
    render(<Settings {...mockProps} />);

    const heading = screen.getByText("Settings");
    expect(heading).toHaveClass("text-2xl", "mb-1");

    const description = screen.getByText(
      "Manage your team and preferences here.",
    );
    expect(description).toHaveClass("text-lg", "text-gray-500", "mb-4");
  });

  it("user roles section has correct layout", () => {
    render(<Settings {...mockProps} />);

    const userRolesHeading = screen.getByText("User Roles");
    expect(userRolesHeading).toHaveClass("text-xl", "mb-3", "font-semibold");

    const userRolesContainer = userRolesHeading.closest("div");
    expect(userRolesContainer).toHaveClass(
      "mb-6",
      "md:flex",
      "items-center",
      "justify-between",
    );
  });

  it("download button has correct styling", () => {
    render(<Settings {...mockProps} />);

    const downloadButton = screen.getByText("Download all").closest("button");
    expect(downloadButton).toHaveClass(
      "bg-white",
      "flex",
      "items-center",
      "border-2",
      "px-5",
      "py-2",
      "rounded-lg",
      "shadow-sm",
    );
  });

  it("renders download icon in the button", () => {
    render(<Settings {...mockProps} />);

    const downloadButton = screen.getByText("Download all").closest("button");
    const downloadIcon = downloadButton.querySelector(
      '[data-testid="download-icon"]',
    );
    expect(downloadIcon).toBeInTheDocument();
  });
});
