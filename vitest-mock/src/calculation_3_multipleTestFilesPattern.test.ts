import { describe, it, expect, vitest, Mock } from "vitest";

import { doTheCalculation } from "./calculation";

// Verschiedene Verhaltensweisen mocken
// Variante 3: Multiple Tests Files Pattern
// Nutzt eine Mock Implementierung in vitest.mock
// Wenn verschiedene Verhaltensweisen gemockt werden, geschieht dies jeweils
// in einer eigenen Testdatei

// Vorteil:
// - Einfach zu nutzen
// Nachteil:
// - mehrere Testdateien notwendig
// - der gemockte Code ist nicht lokal im it sondern am Anfang der Datei
// zusätzlich wie bei Variante 1:
// - das Automocking passiert einmal beim laden der Datei
// => ein vitest.restoreAllMocks löscht den Spy und wir können die Methode nicht mehr steuern

vitest.mock("./calculation_core", () => ({
  ...vitest.importActual("./calculation_core"),
  applyLogic: vitest.fn(()=> 7),
}));


describe("calculation", () => {
  // Hier nur ein Test, da wir nur eine Verhaltensweise mocken
  // weitere Tests in anderen Dateien
  it("should do the calculation", () => {
    const result = doTheCalculation(2, 3);
    expect(result).toBe(7);
  });
});
