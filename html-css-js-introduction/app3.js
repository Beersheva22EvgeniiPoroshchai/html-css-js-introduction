
const q = {};
let e;
q.undefined = 2;
console.log (q[e]); 




const x = {x: 'x', toString: function() {return 'x'}};
const y = {y: 'y', toString: function() {return 'ku'}};
const d = {x: 10, y: 20};
x.toString = function() {return 'xx'}

d[x] = 100;
d[y] = 500;

const f = function(a, b) {};
const num = 2;

f.x = function(a, b) {
    return a + b;
}

console.log(f.x(10,20));

console.log((2).x);

console.log(d);
console.log(d[x]);

(2).x = 10;
console.log((2).x);

const ar = [2];
ar.x = 10;
console.log(ar);
const ar9 = console.log(Array.from({length : 3}));     //array of undef method

console.log(Array.from({length: 6}).map((__, index) => (index + 5) %2 == 0 ? index : ''));
console.log(Array.from({length: 26}).map((__, index) => String.fromCharCode(index + "a".charCodeAt(0)))     //Array of letters
.map(s => `<div>${s}</div>` ).join(""));           //Divs of letters



num.x = 100;
console.log(num.x);
const mm = {};
mm.x = 100;
console.log(mm);
console.log ((1+2).xxx = 1000);

let str1 = 'abcd';
str1 = '*';
console.log(str1);

