//const person = {name: 'Vasya', id: 123, birthYear: 1967, address: {country: 'Israel', city: 'Beer-Sheva', street: 'Eelim'}};

 function createPerson(name, id, birthYear, country, city, street) {
    return {name, id, birthYear, address: {country, city, street}};    //if key name equal value -> not need write key
}

const person1 = createPerson('Vasya', 123, 1967, 'Israel', 'Beer-Sheva', 'Eelim');
const person2 = createPerson('Vasya', 123, 1967, 'Israel', 'Beer-Sheva', 'Eelim');
//console.log(`person1 == person2 is ${person1 == person2}`);

//console.log(person1.id);   //call the field

//console.log(person1['id']);    //call the field  using expression 'string' 

//console.log(person1['address']['city']);   //call field obj in obj
//console.log(person1.address.city);


function displayKeyValue (person, key) {
//console.log(`key ${key} is ${person[key]}`);       

}

//displayKeyValue(person1, 'birthYear');

//displayKeyValue2 (person1, 'address', 'city');

function displayKeyValue2 (person1, key1, key2) {
    if (key2) {
        console.log(`key1 ${key1}, key2 ${key2}, value is ${person1[key1][key2]}`);
    } else {
        console.log(`key ${key1} is ${person1[key1]}`)
    };
}

//displayKeyValue2 (person1, 'adress', 'country');

//Method keys of Object returns array of key values
//console.log('keys', Object.keys(person1));

//Method values of Object returns array of key values
//console.log('values', Object.values(person1));

//Method entries returns array of arrays with key as first element and value as a second elmn
//console.log('entries', Object.entries(person1));

const x = {};
x['ab'] = 10;
x['ab']++;


//console.log(x['ab']);
//console.log(Object.keys(x));

function displayOccurrences(array) {
    
//     const occurrences = array.reduce((obj, s) => { 
//         obj[s] = obj[s] ? obj[s] + 1 : 1;
//         return obj;
//     }, {})
//     Object.entries(occurrences).sort((e1, e2) => e1[1] == e2[1] ? e[0].localeCompare(e2[0]) : e2[1] - e1[1]).
//     forEach(e => console.log(`${e[0]} -> ${e[1]}`))
// }



const occurrences = getOccurrences(array) 
  Object.entries(occurrences).sort((e1, e2) => e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1]).
forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}



const y = {xx: 'qwe'};
//delete y.xx;

console.log(y['xx']);




// const counts = {};
// array.forEach(elem => {
//     counts[elem] = counts[elem] ? (counts[elem] + 1) : 1;
//   // console.log(counts);
// });

// const countSorted = Object.entries(counts).sort((a,b) => {
//     let res = 0;
//     if (b[1] != a[1]) {
//         res = b[1] - a[1];
//     } else if (b[0] < a[0]) {
//         res = 1;
//     } else {
//         res = -1;
//     }
//   //  console.log(res);
//     return res;
    
// }).forEach(a => console.log(a[0] + " -> " + a[1]));



// b[1] - a[1]);
// console.log(countSorted);



displayOccurrences(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a', 'lmn'])
console.log(getOccurrences(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a', 'lmn']))

function getOccurrences(array) {
    return array.reduce((obj, s) => ({ ...obj, [s]: obj[s] != undefined ? obj[s] + 1 : 1 }), {});
}

// lmn -> 3
// a -> 2
// ab -> 2
// c -> 1
// d -> 1


function isAnagram(word, anagram) {

    if (word.length != anagram.length) {
        return false;
    }

    return word.toLowerCase().split("").sort().join("") == anagram.toLowerCase().split("").sort().join("")

}



function isAnagramY(word, anagram) {
let res = false;
if (word.length === anagram.length) {
    word = word.toLowerCase();
    anagram = anagram.toLowerCase();
    const occurrences = getOccurrences(Array.from(word));     //from string to array (array.from)
    res = Array.from(anagram).every(s => occurrences[s]-- > 0)   //pattern every (.some)

}

return res;

}


console.log (isAnagramY("apple", 'pleap'));
console.log (isAnagramY("Aple", 'Pleap'));
console.log (isAnagram("Appl", 'Pleap'));
console.log (isAnagram("juice", 'huicc'));
console.log (isAnagram("juice", 'jui e'));