import { singleCharacterConverter, translator } from "./app.js";

describe("------Tests for the singleCharacterConverter class------- \n", () => {
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

    test("Multiple number/letter inputs should return blank string", () => {
      const input = new singleCharacterConverter({});
      expect(input.getSingleMorseCode).toBe("");
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

    test("Multiple/incorrect morse code inputs should return blank string", () => {
      const input = new singleCharacterConverter(".--.-..");
      expect(input.getSingleLetterOrNumber).toBe("");
    });

    test("Inputs which aren't morse code, should return blank string \n", () => {
      const input = new singleCharacterConverter(420);
      expect(input.getSingleLetterOrNumber).toBe("");
    });
  });
});

describe("------Tests for the translator class------- \n", () => {
  describe("getToMorse Return Test", () => {
    test("A sentence of valid letters/numbers and punctuation should return a morse equivalent", () => {
      const input = new translator(
        "A pr0found silence has entered the chat..."
      );
      expect(input.getToMorse).toBe(
        ".- / .--. .-. ----- ..-. --- ..- -. -.. / ... .. .-.. . -. -.-. . / .... .- ... / . -. - . .-. . -.. / - .... . / -.-. .... .- - .-.-.- .-.-.- .-.-.-"
      );
    });

    test("A sentence of invalid values/punctuation should return a blank string", () => {
      const input = new translator("[][][]+[][][]#");
      expect(input.getToMorse).toBe("");
    });

    test("Should ignore the invalid characters and return the morse equivalent string for valid characters when combined", () => {
      const input = new translator("[][][]pr0found[][][]# silence");
      expect(input.getToMorse).toBe(
        ".--. .-. ----- ..-. --- ..- -. -.. / ... .. .-.. . -. -.-. ."
      );
    });
  });

  describe("getToAlphabet Return Test", () => {
    test("A sentence of valid morse codes should return a lowercase string equivalent", () => {
      const input = new translator(
        ".-- .... .- - / .. ... / -.-- --- ..- .-. / ..-. .- ...- --- ..- .-. .---- - . / ..-. --- --- -.. ..--.."
      );
      expect(input.getToAlphabet).toBe("what is your favour1te food?");
    });

    test("A sentence of invalid morse code characters should return a blank string", () => {
      const input = new translator("[];9 98{}  abcde ");
      expect(input.getToAlphabet).toBe("");
    });

    test("Should ignore invalid characters and return the equivalent alphabet string for valid morse code when combined", () => {
      const input = new translator(
        "7485 ..-. .- ...- --- ..- .-. .---- - .  83[][]/ / ..-. --- --- -.. "
      );
      expect(input.getToAlphabet).toBe("favour1te food");
    });
  });
});
