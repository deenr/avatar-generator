import { describe, it, expect } from "vitest";
import { getPatternSvg } from "../utils/patterns";

describe("Pattern Utility", () => {
  it("returns correct SVG for dots with default size", () => {
    const svg = getPatternSvg("dots", "#000000");
    expect(svg).toContain("data:image/svg+xml");
    
    const decoded = decodeURIComponent(svg.replace('url("data:image/svg+xml,', '').replace('")', ''));
    expect(decoded).toContain("circle");
    expect(decoded).toContain("#000000");
    expect(decoded).toContain('width="60"');
  });

  it("returns correct SVG for waves with custom size", () => {
    const svg = getPatternSvg("waves", "#3b82f6", 20);
    expect(svg).toContain("data:image/svg+xml");
    
    const decoded = decodeURIComponent(svg.replace('url("data:image/svg+xml,', '').replace('")', ''));
    expect(decoded).toContain("path");
    expect(decoded).toContain("#3b82f6");
    expect(decoded).toContain('width="20"');
  });

  it("returns empty string for unknown pattern", () => {
    const svg = getPatternSvg("unknown", "#000000");
    expect(svg).toBe("");
  });

  it("works with all new patterns", () => {
    const patterns = ["dots", "lines", "checkers", "circles", "tic-tac-toe", "waves", "zigzag", "grid", "crosses", "diagonal-lines"];
    patterns.forEach(pattern => {
      const svg = getPatternSvg(pattern, "#000000");
      expect(svg).toContain("data:image/svg+xml");
      expect(svg.length).toBeGreaterThan(0);
    });
  });
});
