import { translator } from "./script/app.js";

const wordBox = document.querySelector(".englishToMorse");
const morseBox = document.querySelector(".morseToEnglish");

wordBox.addEventListener("input", () => {
  const words = new translator(wordBox.textContent);
  morseBox.style.fontSize = "200%";
  morseBox.style.fontWeight = "bold";
  morseBox.textContent = words.getToMorse;
});

morseBox.addEventListener("input", () => {
  const morseCode = new translator(morseBox.textContent);
  wordBox.textContent = morseCode.getToAlphabet;
});
