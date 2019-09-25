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
        '0':       '',
        '**********': ' ',
    };  
      let result = (expr.replace(/11/g, '-')).replace(/10/g, '.');
    
      let letterResult = "";
      let letterCodeResult = "";
    
     
     for(i=0; i<result.length; i=letterCodeResult.length){
    
      if((result[result.length-(i+1)]==='*')
          &&(result[result.length-(i+2)]==='*')
          &&(result[result.length-(i+3)]==='*')
          &&(result[result.length-(i+4)]==='*')
          &&(result[result.length-(i+5)]==='*')
          &&(result[result.length-(i+6)]==='*')
          &&(result[result.length-(i+7)]==='*')
          &&(result[result.length-(i+8)]==='*')
          &&(result[result.length-(i+9)]==='*')
          &&(result[result.length-(i+10)]==='*')
          ){
    letterCodeResult+= result.slice(result.length-(i+10), result.length-(i));
    remainResult = result.slice(0, result.length-(i+10));
    var letter = result.slice(result.length-(i+10), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
    }
    
    else  if((result[result.length-(i+1)]==='.' || result[result.length-(i+1)]==='-')
          &&(result[result.length-(i+2)]==='.' || result[result.length-(i+2)]==='-')
          &&(result[result.length-(i+3)]==='.' || result[result.length-(i+3)]==='-')
          &&(result[result.length-(i+4)]==='.' || result[result.length-(i+4)]==='-')
          &&(result[result.length-(i+5)]==='.' || result[result.length-(i+5)]==='-')
          ){
    letterCodeResult+= result.slice(result.length-(i+5), result.length-(i));
    remainResult = result.slice(0, result.length-(i+5));
    var letter = result.slice(result.length-(i+5), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
        }
        
    else  if((result[result.length-(i+1)]==='.' || result[result.length-(i+1)]==='-')
          &&(result[result.length-(i+2)]==='.' || result[result.length-(i+2)]==='-')
          &&(result[result.length-(i+3)]==='.' || result[result.length-(i+3)]==='-')
          &&(result[result.length-(i+4)]==='.' || result[result.length-(i+4)]==='-')
    ){
    letterCodeResult+= result.slice(result.length-(i+4), result.length-(i));
    remainResult = result.slice(0, result.length-(i+4));
    var letter = result.slice(result.length-(i+4), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
    }
    
    else  if((result[result.length-(i+1)]==='.' || result[result.length-(i+1)]==='-')
          &&(result[result.length-(i+2)]==='.' || result[result.length-(i+2)]==='-')
          &&(result[result.length-(i+3)]==='.' || result[result.length-(i+3)]==='-')
    ){
    letterCodeResult+= result.slice(result.length-(i+3), result.length-(i));
    remainResult = result.slice(0, result.length-(i+3));
    var letter = result.slice(result.length-(i+3), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
    }
    
    else  if((result[result.length-(i+1)]==='.' || result[result.length-(i+1)]==='-')
          &&(result[result.length-(i+2)]==='.' || result[result.length-(i+2)]==='-')
    ){
    letterCodeResult+= result.slice(result.length-(i+2), result.length-(i));
    remainResult = result.slice(0, result.length-(i+2));
    var letter = result.slice(result.length-(i+2), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
    }
    
    else if((result[result.length-(i+1)]==='.' || result[result.length-(i+1)]==='-')
    ){
    letterCodeResult+= result.slice(result.length-(i+1), result.length-(i));
    remainResult = result.slice(0, result.length-(i+1));
    var letter = result.slice(result.length-(i+1), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
    }
    
    else if((result[result.length-(i+1)]==='0')
    ){
    letterCodeResult+= "0";
    remainResult = result.slice(0, result.length-(i+1));
    var letter = result.slice(result.length-(i+1), result.length-(i));
    letterResult+= MORSE_TABLE[letter];
    
    }
    }
    

    letterResult = letterResult.split("").reverse().join("");
    return letterResult;
}

module.exports = {
    decode
}