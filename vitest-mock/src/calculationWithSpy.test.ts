import { describe, it, expect, vi } from "vitest";
import { doTheCalculation } from "./calculation";
import * as calculationCore from "./calculation_core";

// Mock the module at the top level
vi.mock("./calculation_core");

describe("calculation", () => {
  it("should do the calculation with default logic", () => {
    vi.spyOn(calculationCore, 'applyLogic').mockImplementation((a: number, b: number) => a * b);

    const result = doTheCalculation(2, 3);
    expect(result).toBe(6);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });

  it("should do the calculation with overridden logic", () => {
    vi.spyOn(calculationCore, 'applyLogic').mockImplementation(() => 7);

    const result = doTheCalculation(2, 3);
    expect(result).toBe(7);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });
});