import { LettersAndNumbersToMorse } from "./app.js";

describe("Tests for the LettersAndNumbersToMorse class", () => {
  describe("isLetterOrNumber Validator Test", () => {
    test("A single letter input (a-z or A-Z) should return true", () => {
      const input = new LettersAndNumbersToMorse("a");
      expect(input.isLetterOrNumber).toBe(true);
    });

    test("A single number input (0-9) should return true", () => {
      const input = new LettersAndNumbersToMorse(7);
      expect(input.isLetterOrNumber).toBe(true);
    });

    test("Anything that is not a letter, number, or (! , ? .) should return false", () => {
      const input = new LettersAndNumbersToMorse("%");
      expect(input.isLetterOrNumber).toBe(false);
    });

    test("Multiple number/letter inputs should return false", () => {
      const input = new LettersAndNumbersToMorse("7778");
      expect(input.isLetterOrNumber).toBe(false);
    });
  });
});
