// single line arrow function.

const fakeTitles = [
    'Pirate Of Reality',
    'Guardians Of Hell',
    'Witches With Vigor',
    'Spies And Heroes',
    'Robots And Kings',
  ];
  
  const abbreviations = fakeTitles.map(
    title => title.toLowerCase().slice(0, 3));
  
  // equivalent using non-arrow functions
  const abbreviationsEs5 = fakeTitles.map(function(title) { return title.toLowerCase().slice(0, 3); });
  
  console.log(abbreviations); // ['pir', 'gua', 'wit', 'spi', 'rob']




  // multi line arrow functions - {} and return are required

  const fakeTitles = [
    'Pirate Of Reality',
    'Guardians Of Hell',
    'Witches With Vigor',
    'Spies And Heroes',
    'Robots And Kings'
];

const abbreviations = fakeTitles.map(title => {
    console.log(title);
    return title.toLowerCase().slice(0, 3);
});




//  arrow function based on parameters
const items = ['milk', 'bread', 'eggs', 'oranges'];

// when no parameters
items.forEach(() => console.log('another item'));
// when one parameter, the parentheses are optional
items.forEach((item) => console.log(item));
items.forEach(item => console.log(item));
// when more than one parameter
items.forEach((item, index) => console.log('Index ' + index + ' is: ' + item));





// object destructuring

const myObj = {a: 'apple', b: 'bumblebee', c: 'cat'}
const {a, c} = myObj;
console.log(a); // => apple
console.log(c); // => cat






// Property value shorthand

// in es6

const x = 1;
const y = 2;
const myObj = {x, y}
console.log(myObj); // => { x: 1, y: 2 }

// equivalent to this in es5

var x = 1;
var y = 2;
var myObj = {x: x, y: y};





// Spread operator

function calcVolume(width, height, depth) {
  return width * height * depth;
}
const values = [10, 20, 30];
console.log(calcVolume(...values)); // => 6000
// The spread operator can also be used to copy contents of one array elsewhere:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3); // => [1, 2, 3, 4, 5, 6]






// Object.assign

const objA = {
  foo: 'foo',
  bar: 'bar'
 };
 
 const objB = {
  foo: 'something else',
  bizz: 'bizz',
  bang: 'bang'
 };
 
 console.log(Object.assign({}, objA, objB)); // => {foo: "something else", bar: "bar", bizz: "bizz", bang: "bang"}






//  Modules

// file_a.js
export const width = 10;
export const height = 5;
// file_b.js
import {width, height} from './file_a';
console.log(width, height);
// If you want to rename variables when you import them, you can add as statements:
// file_b.js
import {width as tableWidth, height as tableHeight} from './file_a';
console.log(tableWidth, tableHeight);
// If you want to import all of the exports from a module into an object. you can use the following syntax:
// file_b.js
import * as dimensions from './file_a';
console.log(dimensions.width, dimensions.height);
// Each module can also export a single variable called default, which has a corresponding shorthand syntax for importing:
// file_a.js
export default function area(width, height) {
  return width * height;
}
// file_b.js
// Shorthand
import area from './file_a';
// Long version
import {default as area} from './file_a';





// Classes

class Animal {
  constructor(name) {  
    // Classes have a constructor method that is used to set any initial properties of an object created from the class. The constructor is called when the class is instantiated. Instantiating a class creates a new object that has all of the methods of the class.
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
// To instantiate a class you use the new keyword:
const fido = new Animal('fido');
fido.speak(); // fido makes a noise

const pluto = new Animal('pluto');
pluto.speak(); // pluto makes a noise
// Classes can inherit from other classes to make more specific versions of that class by using the extends keyword:
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const lassie = new Dog('lassie', 'Rough collie');
lassie.speak(); // lassie barks