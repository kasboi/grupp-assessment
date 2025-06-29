import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Table from "../Table";

// Mock the DownloadIcon component
vi.mock("../Icon", () => ({
  DownloadIcon: () => <div data-testid="download-icon">Download</div>,
}));

// Mock API response
const mockRolesData = [
  {
    id: 1,
    name: "Admin Role",
    type: "SYSTEM",
    date: "Jan 1, 2023",
    status: "Active",
    users: [
      "https://example.com/avatar1.jpg",
      "https://example.com/avatar2.jpg",
    ],
    totalUser: 2,
  },
  {
    id: 2,
    name: "User Role",
    type: "CUSTOM",
    date: "Feb 1, 2023",
    status: "In Active",
    users: ["https://example.com/avatar3.jpg"],
    totalUser: 1,
  },
];

describe("Table Component", () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    fetch.mockReset();
  });

  it("renders loading state initially", () => {
    fetch.mockImplementation(() => new Promise(() => {})); // Never resolves
    render(<Table />);
    expect(screen.getByText("Loading roles data...")).toBeInTheDocument();
  });

  it("renders error state when API fails", async () => {
    fetch.mockRejectedValueOnce(new Error("API Error"));
    render(<Table />);

    await waitFor(() => {
      expect(screen.getByText(/Error: API Error/)).toBeInTheDocument();
    });
  });

  it("renders table with data when API succeeds", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRolesData,
    });

    render(<Table />);

    await waitFor(() => {
      expect(screen.getByText("Admin Role")).toBeInTheDocument();
      expect(screen.getByText("User Role")).toBeInTheDocument();
      expect(screen.getByText("SYSTEM")).toBeInTheDocument();
      expect(screen.getByText("CUSTOM")).toBeInTheDocument();
    });
  });

  it("displays user avatars correctly", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRolesData,
    });

    render(<Table />);

    await waitFor(() => {
      // Should display user avatar images
      const avatars = screen.getAllByAltText(/User \d+/);
      expect(avatars).toHaveLength(3); // 2 for first role, 1 for second role
    });
  });

  it('shows "No users" when users array is empty', async () => {
    const dataWithNoUsers = [
      {
        ...mockRolesData[0],
        users: [],
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => dataWithNoUsers,
    });

    render(<Table />);

    await waitFor(() => {
      expect(screen.getByText("No users")).toBeInTheDocument();
    });
  });
});
