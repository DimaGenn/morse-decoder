const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};






function decode(expr) {
    let array = expr.split('**********');
    let result = "";
    for (i = 0; i < array.length; i++) {
      for (j = 0; j < array[i].length; j += 10) {
        let numbs = array[i][j] + array[i][j + 1] + array[i][j + 2] + array[i][j + 3] + array[i][j + 4] + array[i][j + 5] + array[i][j + 6] + array[i][j + 7] + array[i][j + 8] + array[i][j + 9];
        let symbols = numbs.replace(/11/g, "-").replace(/10/g, ".").replace(/0/g, "");
        symbols = MORSE_TABLE[symbols];
        result = result + symbols;
      }
      result = result + " ";
    }
    result = result.slice(0, -1);
  return(result);
}

module.exports = {
    decode
}