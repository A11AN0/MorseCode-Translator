import { singleCharacterConverter } from "./app.js";

describe("Tests for the singleCharacterConverter class", () => {
  describe("isLetterOrNumber Validator Test", () => {
    test("A single letter input (a-z or A-Z) should return true", () => {
      const input = new singleCharacterConverter("a");
      expect(input.isLetterOrNumber).toBe(true);
    });

    test("A single number input (0-9) should return true", () => {
      const input = new singleCharacterConverter(7);
      expect(input.isLetterOrNumber).toBe(true);
    });

    test("Anything that is not a letter, number, or (! , ? .) should return false", () => {
      const input = new singleCharacterConverter("%");
      expect(input.isLetterOrNumber).toBe(false);
    });

    test("Multiple number/letter inputs should return false", () => {
      const input = new singleCharacterConverter("7778");
      expect(input.isLetterOrNumber).toBe(false);
    });
  });

  describe("getSingleMorseCode Return Test", () => {
    test("A single letter input (a-z or A-Z) should return its morse code equivalent", () => {
      const input = new singleCharacterConverter("g");
      expect(input.getSingleMorseCode).toBe("--.");
    });

    test("A single number input (0-9) should return its morse code equivalent", () => {
      const input = new singleCharacterConverter(9);
      expect(input.getSingleMorseCode).toBe("----.");
    });

    test("A valid punctuation mark (! , ? .) should return its morse code equivalent", () => {
      const input = new singleCharacterConverter("?");
      expect(input.getSingleMorseCode).toBe("..--..");
    });

    test("Multiple number/letter inputs should return undefined", () => {
      const input = new singleCharacterConverter({});
      expect(input.getSingleMorseCode).toBe(undefined);
    });
  });

  describe("isMorseCode Validator Test", () => {
    test("A single morse code input should return true", () => {
      const input = new singleCharacterConverter(".---");
      expect(input.isMorseCode).toBe(true);
    });

    test("Multiple morse code/incorrect morse code should return false", () => {
      const input = new singleCharacterConverter(".._....");
      expect(input.isMorseCode).toBe(false);
    });

    test("Anything that is not morse code should return false", () => {
      const input = new singleCharacterConverter([]);
      expect(input.isMorseCode).toBe(false);
    });
  });

  describe("getSingleLetterOrNumber Return Test", () => {
    test("A single morse code inpput should return its letter/number equivalent", () => {
      const input = new singleCharacterConverter("-.-.--");
      expect(input.getSingleLetterOrNumber).toBe("!");
    });

    test("Multiple/incorrect morse code inputs should return undefined", () => {
      const input = new singleCharacterConverter(".--.-..");
      expect(input.getSingleLetterOrNumber).toBe(undefined);
    });

    test("Inputs which aren't morse code, should return undefined", () => {
      const input = new singleCharacterConverter(420);
      expect(input.getSingleLetterOrNumber).toBe(undefined);
    });
  });
});
