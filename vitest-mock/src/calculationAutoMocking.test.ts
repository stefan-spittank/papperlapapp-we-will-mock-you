import { describe, it, expect, vitest, Mock } from "vitest";

import { doTheCalculation } from "./calculation";
import { applyLogic } from "./calculation_core";

vitest.mock("./calculation_core");

describe("calculation", () => {
  it("should do the calculation", () => {
    (applyLogic as Mock).mockReturnValue(7);
    const result = doTheCalculation(2, 3);
    console.log("do it");
    expect(result).toBe(7);
  });
});
