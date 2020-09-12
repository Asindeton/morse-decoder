const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here

  let allWords = expr.match(/.{1,10}/g);
  let answer = "";
  let word = "";

  allWords.forEach((element) => {
    if (element.startsWith("**********")) {
      answer += " ";
    } else {
      word = element.replace(/00/g, "");
      word = word.replace(/10/g, ".").replace(/11/g, "-");
      answer += MORSE_TABLE[word];
    }
  });

  return answer;
}

module.exports = {
  decode,
};
