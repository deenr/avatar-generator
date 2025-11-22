import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useAvatarStore } from "../stores/avatar";

describe("Avatar Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with default values", () => {
    const store = useAvatarStore();
    expect(store.textColor).toBe("#000033");
    expect(store.backgroundColor).toBe("#00C16A");
    expect(store.font).toBe("Arial");
    expect(store.fontWeight).toBe("400");
    expect(store.sizePercentage).toBe(40);
    expect(store.zoom).toBe(100);
    expect(store.shape).toBe("square");
    expect(store.backgroundType).toBe("solid");
  });

  it("updates background style for solid color", () => {
    const store = useAvatarStore();
    store.backgroundType = "solid";
    store.backgroundColors = ["#FF0000", "#000000"];
    expect(store.backgroundStyle).toEqual({ backgroundColor: "#FF0000" });
  });

  it("updates background style for linear gradient", () => {
    const store = useAvatarStore();
    store.backgroundType = "linear";
    store.backgroundColors = ["#FF0000", "#0000FF"];
    store.backgroundGradientAngle = 90;
    expect(store.backgroundStyle).toEqual({
      background: "linear-gradient(90deg, #FF0000, #0000FF)",
    });
  });

  it("updates background style for radial gradient", () => {
    const store = useAvatarStore();
    store.backgroundType = "radial";
    store.backgroundColors = ["#FF0000", "#0000FF"];
    expect(store.backgroundStyle).toEqual({
      background: "radial-gradient(circle, #FF0000, #0000FF)",
    });
  });

  it("updates background style for pattern", () => {
    const store = useAvatarStore();
    store.backgroundType = "pattern";
    store.activePattern = "dots";
    store.backgroundColors = ["#FFFFFF", "#000000"];
    
    expect(store.backgroundStyle).toHaveProperty("backgroundColor", "#FFFFFF");
    expect(store.backgroundStyle).toHaveProperty("backgroundImage");
    expect(store.backgroundStyle.backgroundImage).toContain("data:image/svg+xml");
  });
});
