import { singleLettersAndNumbersToMorse } from "./app.js";

describe("Tests for the singleLettersAndNumbersToMorse class", () => {
  describe("isLetterOrNumber Validator Test", () => {
    test("A single letter input (a-z or A-Z) should return true", () => {
      const input = new singleLettersAndNumbersToMorse("a");
      expect(input.isLetterOrNumber).toBe(true);
    });

    test("A single number input (0-9) should return true", () => {
      const input = new singleLettersAndNumbersToMorse(7);
      expect(input.isLetterOrNumber).toBe(true);
    });

    test("Anything that is not a letter, number, or (! , ? .) should return false", () => {
      const input = new singleLettersAndNumbersToMorse("%");
      expect(input.isLetterOrNumber).toBe(false);
    });

    test("Multiple number/letter inputs should return false", () => {
      const input = new singleLettersAndNumbersToMorse("7778");
      expect(input.isLetterOrNumber).toBe(false);
    });
  });

  describe("getSingleMorseCode Return Test", () => {
    test("A single letter input (a-z or A-Z) should return its morse code equivalent", () => {
      const input = new singleLettersAndNumbersToMorse("g");
      expect(input.getSingleMorseCode).toBe("--.");
    });

    test("A single number input (0-9) should return its morse code equivalent", () => {
      const input = new singleLettersAndNumbersToMorse(9);
      expect(input.getSingleMorseCode).toBe("----.");
    });

    test("A valid punctuation mark (! , ? .) should return its morse code equivalent", () => {
      const input = new singleLettersAndNumbersToMorse("?");
      expect(input.getSingleMorseCode).toBe("..--..");
    });

    test("Multiple number/letter inputs should return null", () => {
      const input = new singleLettersAndNumbersToMorse({});
      expect(input.getSingleMorseCode).toBe(null);
    });
  });
});
