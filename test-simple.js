console.log("Test script is running");

// Simple test to check if vitest works
import { describe, it, expect } from "vitest";

describe("Simple test", () => {
  it("should work", () => {
    expect(1 + 1).toBe(2);
  });
});
