import { doTheCalculation } from "./calculation";
import * as calculationCore from "./calculation_core";

jest.mock("./calculation_core", () => {
  return { applyLogic: jest.fn() };
});

describe("calculation", () => {
  it("should do the calculation with default logic", () => {
    (calculationCore.applyLogic as jest.Mock).mockImplementation(
      (a: number, b: number) => a * b
    );
    const result = doTheCalculation(2, 3);
    expect(result).toBe(6);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });

  it("should do the calculation with overridden logic", () => {
    (calculationCore.applyLogic as jest.Mock).mockImplementation(
      (a: number, b: number) =>7
    );
    const result = doTheCalculation(2, 3);
    expect(result).toBe(7);
    expect(calculationCore.applyLogic).toHaveBeenCalledWith(2, 3);
  });
});