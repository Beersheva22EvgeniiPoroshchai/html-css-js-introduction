
// function Rectangle (width, height) {
//     this.width = width;
//     this.height = height;
   

// }

// Rectangle.prototype.square = function() {
//     return this.width * this.height;
// };

// Rectangle.prototype.perimeter = function() {
//     return 2 * (this.width + this.height);
// };



class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#width = width;
        this.#height = height;


    }
    square() {
        return this.#width * this.#height;
    }
    perimeter() {
        return 2 * (this.#width + this.#height);
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.perimeter());
console.log(rectangle.square());
console.log(rectangle);


class Square extends Rectangle {
    constructor(width) {
        super(width, width); 
    }
}
const square = new Square (10,10);
console.log(square.perimeter());


Array.prototype.map = function() {
console.log(this);
    return 'kuku';
}
const ar = [1,2,3];
//console.log(ar.map())

// write myForEach to call from any array with the same bahaviour as the standard forEach
// write myMap to call from any array
// write myFilter
// write myReduce


Array.prototype.myForEach = function(funct) {
for (let ind = 0; ind < this.length; ind++) {
    funct(this[ind], ind, this);
    }
}

Array.prototype.myMap = function(funct) {
    let res =[];
    for (let ind = 0; ind < this.length; ind++) {
        res[ind] = funct(this[ind], ind, this);
        
    }
    return res;
    
    }

    Array.prototype.myFilter = function(funct) {
    let res =[];
    
    for (let ind = 0; ind < this.length; ind++) {
        if (funct(this [ind])) {
            res.push(this[ind]);
            
        }
      }
        return res;
    }


    Array.prototype.myReduce = function (funct, accumRes) {
        let res = accumRes == undefined ? this[0] : accumRes;
        let i = accumRes == undefined ? 1 : 0;
          for (let ind = i; ind < this.length; ind++) {
            res = funct(res, this[ind], ind, this)
        }
        return res;
}
 
    
let arr = [1,2,3,4,5]
console.log(arr);
arr.myForEach(n => console.log(++n));

arr = arr.myMap(n => n = ++n);
console.log(arr);


//arr = arr.myFilter(n => n%2 == 1);
//console.log(arr);


arr = arr.myReduce((a, b) => a+b)
console.log(arr);

//Array.prototype.


// class Deferred {

// }




// const d = new Deferred();
// d.then(function(res) {
// console.log("1 ", res);
// return "a"; });

// d.then(function(res) {
// console.log("2 ", res);
// return "b"; });

// d.then(function(res) {
// console.log("3 ", res);
// return "c"; });
// d.resolve('hello');



Function.prototype.myBind = function(object,...params) {
    let nameFunc = this.name;
    object[nameFunc] = this;
        return function(){
            object[nameFunc](...params);
        };
 }

const point = {x: 3, y: 4};

function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t}`)
}

displayPoint = displayPoint.myBind(point, 100, 200); 
displayPoint(8,9);
displayPoint4 = displayPoint.myBind(point, 300, 400); 
displayPoint();

