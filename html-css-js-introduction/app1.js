let a = [];
a.push("asd");
a.push(123);
//a.length = 5;

a.push("111");

//console.log(a.indexOf(2));
// for (let i = 2; i <a.length; i++) {
// a(i).push(7);
// }


let ar = [];
ar[10] = 100;
ar[0] = 'hello';
ar[3] = [];
ar.length = 0;
ar[0] = 3;
console.log(ar[0]);


// add at array end 
ar[ar.length] = 10;
ar[2] = [];
ar[2] = "s";
ar2 = [[1,6],[2,3],[3,1]];

ar.push(ar2);
console.log(ar);


//method 'map'
console.log([1,2,3].map(n => n ** 2));    //Math.pow


//function getRandomIntNumber (min, max, minInclusive=true, maxExclusive=false) {

function getRandomIntNumber(min, max, minInclusive=true, maxExclusive=false) {
   if (!minInclusive) {
    min++;
   }
   if (maxExclusive) {
    max++;
   }
   let res = NaN;
   if (min < max) {
    res = Math.trunc(min + Math.random() * (max - min)); 
   }
   return res;
}
   
   
   
//    (minInclusive == false || maxExclusive == true) {
//     return Math.floor(Math.random() * (max+1 - min-1)) + min+1;
//    }
//     return Math.floor(Math.random() * (max - min)) + min;
     
    
console.log(getRandomIntNumber(100, 90, false, true));



function getArrayRandomIntNumbers (nNumbers, min, max, minInclusive=true, maxExclusive=false) {

let ar =[];
ar.length = nNumbers;
console.log(ar);
console.log([...ar]);
res = [...ar];    //spread-operator
return res.map(() => getRandomIntNumber(min, max, minInclusive, maxExclusive));

}
console.log (getArrayRandomIntNumbers(3, 3, 9, false, true));


function getOrdredList(array) {
    return `<ol style="text-align: center; list-style: none">${getListItems(array)}</ol>`
}

function getListItems(array) {
    return array.map(v => `<li style="width: 30px; height: 30px; border: 1px solid gray;
    background-color:${v ? 'black' : 'white'}"></li>`).join('');
}


//bodyId.innerHTML = getOrdredList(getArrayRandomIntNumbers(5, 0, 2));



function getMatrixRandomIntNumbers(rows, columns, min, max) {
    ar = [];
    ar.length = rows;
    res = [...ar];

    return res.map(() => getArrayRandomIntNumbers(columns, min, max));

}

console.log(getMatrixRandomIntNumbers(5, 5, 0, 2));


//splice method for updating array 
let arS = [10, 20, -70, 100, 6, -10, 0];   //
console.log(arS);
const arI = [1, 2, 3];           //
let index = arS.indexOf(-70);
arS.splice(index+1, 0, ...arI);    //adding elements
console.log(arS);
console.log(arS.splice(index+1, 2));   //removing elements
console.log(arS);



//slice
let arR = [1, 5, -9, 2, 10, -4, -15];
const arN = [3,4,5];
arR.slice(arN);
console.log(arR);



//findIndex by predicate
let indFirstNegat = arR.findIndex(v => v < 0);
console.log(index == indFirstNegat);

//filter
arR = arR.filter(v => v > 0);
console.log(arR);

//every: all || some: anyone  return true or false
console.log(arR.every(v => v > 0));
console.log(arR.some(v => v < 0));




function arrayCopy (source, positionSrc, destination, positionDestination, length) {
//copy 'length' elements from position 'posSrc' of array 'src' to array 'dst'
  
source.splice(0, positionSrc);
//console.log(source);
destination.splice(positionDestination, length, ...source);
//console.log(destination);
return destination;


}

function moveElement (array, position, shift) {
//example: ar [1,2,3,4,5] ; moveElement (ar, 2, 1) => [1,2,4,3,5]

if(position > -1){
    const element = array[position];
    let positionNew = position + shift;
    let res =[];
    res = arrayCopy(array,0,res,0,array.length);
    array.splice(position,array.length - 1);
    array.splice(position,0,...res.splice(++position,res.length - position));
    
    positionNew = positionNew > 0 ? position < array.length ? positionNew :array.length : 0;
    array.splice(positionNew,0,element);
}

return array;
}

arSource = [1,2,3,4];
arDestinat = ['a','b','c','d'];
console.log(arrayCopy(arSource, 0,  arDestinat, 2, 3)); 

ar3 = ['q', 'w', 'e', 'r', 't'];
console.log(moveElement(ar3, 2, 4));


//reduce 
console.log([1,2,3].reduce((res, curElem) => res + curElem, 10));

ar5 = [15,2,11,1];
console.log(ar5.reduce((res, curElem) => (res < curElem) ? res : curElem));


console.log(ar5.reduce((res, curElem) => {
    if (curElem > res) {
        return curElem;
    } else {
        return res;
    }
}));


    ar6 = [1,2,4,7,3,5];
    console.log(ar6.reduce((res, curVal) => {
        if (curVal < res[0]) {
            res[0] = curVal;

        }
        if (curVal > res[1]) {
            res[1] = curVal;
        }

        return res;
    }, [Number.MAX_VALUE, Number.MIN_VALUE]));


    const ar10 = [2 , 3, 'abc', 123, 200, 99, -5];
    console.log(ar10.sort((a,b) => a - b));

    









