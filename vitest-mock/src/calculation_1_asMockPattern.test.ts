import { describe, it, expect, vitest, Mock } from "vitest";

import { doTheCalculation } from "./calculation";
import { applyLogic } from "./calculation_core";

// Verschiedene Verhaltensweisen mocken
// Variante 1: asMock Pattern
// Nutzt autoMocking mit vitest.mock
// import der nun gemockten Methode unter dem Wissen, dass wir nun eine als Spy gewrappte
// Methode haben, deren Verhalten wir beliebig steuern können

// Vorteil:
// - Einfach zu nutzen
// Nachteil:
// - das Automocking passiert einmal beim laden der Datei
// => ein vitest.restoreAllMocks löscht den Spy und wir können die Methode nicht mehr steuern

vitest.mock("./calculation_core");

const applyLogicMock = applyLogic as Mock;

describe("calculation", () => {
  it("should do the calculation", () => {
    applyLogicMock.mockReturnValue(7);
    const result = doTheCalculation(2, 3);
    expect(result).toBe(7);
  });

  it("should do the calculation with different values", () => {
    applyLogicMock.mockReturnValue(9);
    const result = doTheCalculation(3, 3);
    expect(result).toBe(9);
  });
});
