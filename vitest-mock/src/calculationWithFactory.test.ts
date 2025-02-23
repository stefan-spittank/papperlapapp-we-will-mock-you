import { describe, it, expect, vi, Mock } from "vitest";
import { doTheCalculation } from "./calculation";
import * as calculationCore from "./calculation_core";
import { defaulApplyLogic } from "./applyLogic";

vi.mock("./calculation_core", () => {
  return { applyLogic: vi.fn() };
});

describe("calculation", () => {
  it("should do the calculation with default logic", () => {
    (calculationCore.applyLogic as Mock).mockImplementation(
      (a: number, b: number) => a * b
    );
    const result = doTheCalculation(2, 3);
    expect(result).toBe(6);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });

  it("should do the calculation with overridden logic", () => {
    (calculationCore.applyLogic as Mock).mockImplementation(() => 7);
    const result = doTheCalculation(2, 3);
    expect(result).toBe(7);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });

  it("should do the calculation with external logic", () => {
    (calculationCore.applyLogic as Mock).mockImplementation(defaulApplyLogic);
    const result = doTheCalculation(2, 3);
    expect(result).toBe(42);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });
});
