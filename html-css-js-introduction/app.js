// let a = 5;
// a = "hello";
// a = false;
// let a = 5 + "5";
// console.log(a);
// console.log(a, typeof(a));
// a = a - 5;
// console.log(a, typeof(a));
// a = "abc";
// a /= 2;
// console.log(a, typeof(a));
// a += "def";
// console.log(a);
// a = 12;
// a *= 1.5;
// console.log(a);
// a = "123";
// a=+a;
// console.log(a, typeof(a));
// if (a = 1) {
//     console.log("a is true");
// }
// console.log(a);

// let a = 1;
// let b = 3;
// let c = "2";
// if (a < b <= c) {
//     console.log("a<b<c");
// }
// console.log(a,b,c);


// if (2 > "abc") {
//     console.log("true")
// }

// console.log("2", "abc");

// let a = "abc";
// a= !!a;


// console.log(a,typeof(a));

// console.log(2+10*false/true);

// console.log(10*false/true);

// console.log(false/true);

// let a = new Number(3);
// console.log(a, typeof(a));


// let b = 0.345678;
// console.log(b, typeof(b));
// b = b.toFixed(4);
// console.log(b, typeof(b));

// a = !!new Number(1);
// console.log(a, typeof a);

// a = !!0;
// console.log(a, typeof a);

// f = new String("2");

// g = 5;
// l = f -g;
// console.log(l, typeof l);

// console.log(false/true);

// a = 0.6;
// Math.trunc(a);

// console.log(a);



// let a = "256 * 320";
// console.log(a);
// console.log(parseInt(a));

// a = 257.45;
// console.log(parseFloat(a));
// a = "257.4a";
// console.log(+a, parseInt(a), parseFloat(a));

// String.length(console.log("abc"));

// a = "";
// console.log (a.length);
// a = 123;
// console.log(a.toString(16));

// let a = "abc";
// a= !a;

// a = new Number(3);
// console.log(a,typeof(a));

//console.log(("a" + (+"a") + "as").toLowerCase());




function myToStringInt(number, radix) {
    const sign = number < 0 ? '-' : '';
    number = Math.abs(number); 
    number = Math.round(number);
    if (radix < 2 || radix > 36) {
            radix = 10;
         }
         let res = ''; 
    do {
        res = getSymbol(number, radix) + res;
        number = Math.trunc(number / radix);

    } while (number != 0);
    return sign + res;
}

function getSymbol (number, radix) {
    const aLetterCode = "a".charCodeAt(0);
    const delta = aLetterCode - 10;
    const remainder = number % radix;
    return remainder < 10 ? remainder +"" : String.fromCharCode(remainder + delta);
}

console.log(getSymbol(26, 16));
console.log(String.fromCharCode("97"))
console.log(myToStringInt(123, 10));

// "string" or 'string' with no string interpolation
// `...${<expression>}...` 

const strNum = '0xff';
const radix = 16;
console.log(`string with number ${strNum} for redix ${radix} is ${myParseInt(strNum, radix)}`);




function myParseInt (strNum, radix) {
 
    strNum = strNum.trim();
    let index = strNum.charAt(0) == '-' || strNum.charAt(0) == '+'  ? 1 : 0;
    
    if ((!radix || radix == 16) && getHexdecemalIndex(strNum.substring(index) )> 0) {
        index += 2
        radix = 16;
    }
    if (!radix) {
        radix = 10;
    }



    let res = radix > 1 && radix < 37 ? getDigitCode(strNum, index, radix) : NaN;
    if (!isNaN(res)) {
        let digit;
        index++;
        while(index < strNum.length &&
            !isNaN(digit = getDigitCode(strNum, index, radix))) {
                res = res * radix + digit;
                index++;
            }
            if (strNum[0] == '-') {
                res = -res;
            }
        }
    return res;
    }

    function getDigitCode(strNum, index, radix) {
        const delta = 'a'.charCodeAt(0) - 10;
        const symbol = strNum.charAt(index).toLowerCase();
        const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
        return code >= 0 && code < radix ? code : NaN;
    }


    function getHexdecemalIndex(str) {
        return str.toLowerCase().startsWith('0x') ? 2 : 0;
    }

    //the same behavior as standard parseInt



console.log(function() {}() + 10);

function sum (op1 = 10, op2 = 20) {
    return op1 + op2;
}

let a1=5;
let a2;
console.log(`a1 = ${a1}, a2 = ${a2}, sum (a1,a2) is ${sum(a1,a2)}`)

