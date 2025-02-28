import { describe, it, expect, vitest, Mock } from "vitest";

import { doTheCalculation } from "./calculation";

// Verschiedene Verhaltensweisen mocken
// Variante 2: importModule Pattern
// Nutzt vitest.spyOn um die Methode zu mocken
// Dafür werden alle exports der Datei importiert um ein Objekt für spyOn zu erhalten

// Vorteil:
// - Ich bin unabhängig von vitest.restoreAllMocks
// Nachteil:
// - Etwas mehr Boilerplate als Variante 1

import * as CalculationCoreModuke from "./calculation_core";


describe("calculation", () => {
  it("should do the calculation", () => {
    vitest.spyOn(CalculationCoreModuke,"applyLogic").mockReturnValue(7);
    const result = doTheCalculation(2, 3);
    expect(result).toBe(7);
  });

  it("should do the calculation with different values", () => {
    vitest.spyOn(CalculationCoreModuke,"applyLogic").mockReturnValue(9);
    const result = doTheCalculation(3, 3);
    expect(result).toBe(9);
  });
});
