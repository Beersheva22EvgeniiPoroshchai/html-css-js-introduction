
this.x = 100;
//console.log(this);

w = 1000;
w.width = 100;
w.height =300;

this.width = 1000;
this.height = 2000;

function f1() {
   return this;
}

const f2 = () => {
    return this;
}

// console.log('f1 call result', f1());
// console.log('f2 call result', f2());
// console.log((() => {
//     console.log(this);
// })());

const x = {f1: function() {
return this;


}, f2: () => {return this}};

console.log('x.f1 call result', x.f1())
console.log('x.f2 call result', x.f2())


const rectangle = {width: 20, height: 20, square: function() {
return this.width * this.height;
}, perimeter: () => (this.width + this.height)*2};

console.log(`square = ${rectangle.square()}`);
console.log(`perimeter = ${rectangle.perimeter()}`);

const point = {x: 3, y: 4};
function displayPoint(w, t) {
    console.log(`x = ${this.x}, y = ${this.y}, w = ${w}, t = ${t}`)
}


//displayPoint = displayPoint.bind(point, 100, 200);    //прив'язує; return new object with changed values, don't change function
//displayPoint();

const displayPoint1 = displayPoint.bind(point, 100, 200);   
displayPoint.call(point, 200, 300);             //just call, not return new as bind

displayPoint.apply(point, [300, 400]);   //return array
const rectangle1 = {width: 20, height: 20};

console.log(`rectangle == rectangle1 is ${rectangle == rectangle1}`)

console.log(`rectangle == rectangle1 is ${JSON.stringify(rectangle) == JSON.stringify(rectangle1)}`);

console.log (JSON.stringify(rectangle));  //JSON string in format JS
//console.log (JSON.stringify(rectangle1)); 

const rectangle2 = JSON.parse(JSON.stringify(rectangle));     //receive deep copy of object;   parse: receive string and return object
console.log (rectangle2);

const rectangle3 = {...rectangle1};   //not deep copy without nested fields


Function.prototype.bind 

function funct (...params) {
    console.log(this);
    params.forEach(p => console.log(p))
}
const obj = {f: function (...params) {console.log(this)}
    (1,2)}
funct (1,2);
obj.funct(1,2);