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
    let morse = [];
    let ex_arr = expr.split('');
    let result = '';
    while(ex_arr.length>0){
        
        letter_encoded = ex_arr.splice(ex_arr.length-10, 10);
        console.log(letter_encoded);

        if (letter_encoded.includes('*')) {
            result = ' ' + result;
            continue;
        }
        let morse_letter = '';
        for(let i=0; i<letter_encoded.length/2; i++){
            let morse_sym_enc = letter_encoded.slice(i*2, i*2+2).join('');
            let morse_sym_dec = morse_sym_enc == '11' ? '-' : morse_sym_enc == '10' ? '.' : '';
            morse_letter += morse_sym_dec;
            console.log(morse_sym_dec);
        }
        if (morse_letter){
        console.log(MORSE_TABLE[morse_letter]);
        result = MORSE_TABLE[morse_letter] + result;
        }
       
    }
    console.log(result);
    return result;
    // write your solution here
}

module.exports = {
    decode
}

decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010');