// control with if statements
if (x === 1) {
  // do things here
} else if (x === 2) {
  // do some other things here
} else {
  // do this
}

// loops
// for loop
for (let i = 0; i < 10; i++) {
  console.log(`i is ${i}`);
}

// while loop
let i = 0;

while (i < 10) {
  console.log(`i is: ${i}`);
  i++;
}

// spread operator ... to flatten an array spread operator and then flat.something to flat

let mid = [3, 4];
let arr = [1, 2, mid, 5, 6];
console.log(arr);

let mid = [3, 4];
let arr = [1, 2, ...mid, 5, 6];
console.log(arr);


// create funciton that takes an argument and prints to the console and run function
const message = "Hello World";

function helloWorld(msg) {
  console.log(msg);
}

helloWorld(message);


// Loop through an array
const myArray = [
  "hockey",
  "lacrosse",
  "curling"
];

for (let i = 0; i < myArray.length; i++) {
  console.log(`element ${i}: ${myArray[i]}`);
}

// alternatively, and even better!

myArray.forEach((element, index) => console.log(`element ${index}: ${element}`));


// Loop through object
const myObj = {
  fruit: "apple",
  drink: "water",
  dessert: "cookie"
};

for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}

// alternatively, and even better
Object.keys(myObj).forEach(key => console.log(`${key}: ${myObj[key]}`));

// Loop through an array of objects printing out key/ value pairs of each object with in the array
const myData = [{
  name: "Tom",
  age: 22,
  favoriteFood: "pizza"
},
{
  name: "Jane",
  age: 42,
  favoriteFood: "sushi"
},
{
  name: "Fred",
  age: 34,
  favoriteFood: "lettuce"
}
];

myData.forEach((item, index) => {
  Object.keys(item).forEach(key =>
    console.log(`myData[${index}][${key}] is ${myData[index][key]}`));
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
// declare a variable that can be reassigned a value
let newNum = 0;
newNum = 2; // reassigned to the value of 2
/////////////////////////////////////////////////////////////////////////////////

//define a function that takes 1 argument and logs that argument to the console and invoke this function
function print(toPrint) {
  console.log();
}
print(toPrint);
/////////////////////////////////////////////////////////////////////////////////////

//array

const myArray = ["apple", "orange", "pear"];

//loop through and array
const myArray = [
  "hockey",
  "lacrosse",
  "curling"
];

for (let i = 0; i < myArray.length; i++) {
  console.log(`element ${i}: ${myArray[i]}`);
}

// alternatively, and even better!

myArray.forEach((element, index) => console.log(`element ${index}: ${element}`));
//////////////////////////////////////////////////////

//objects
const myObj = {
  fruit: "apple",
  drink: "water",
  dessert: "cookie"
};

//loop through object
const myObj = {
  fruit: "apple",
  drink: "water",
  dessert: "cookie"
};

for (let key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}

// alternatively, and even better
Object.keys(myObj).forEach(key => console.log(`${key}: ${myObj[key]}`));
///////////////////////////////////////////////////////////


//Loop through an array of objects, printing out the key / value pairs of each object within the array
const myData = [{
  name: "Tom",
  age: 22,
  favoriteFood: "pizza"
},
{
  name: "Jane",
  age: 42,
  favoriteFood: "sushi"
},
{
  name: "Fred",
  age: 34,
  favoriteFood: "lettuce"
}
];

myData.forEach((item, index) => {
  Object.keys(item).forEach(key =>
    console.log(`myData[${index}][${key}] is ${myData[index][key]}`));
});
/////////////////////////////////////////////////////////////

//Self Reference this.

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
  };
  return person;
}
////////////////////////////////////////////////////////////////////////////////////

// Write a function that accepts 1 integer as an argument. The
// function should return "true" if the number is divisible by either
// 3 or 5, and return "false" otherwise.
function divide(num) {
  if (num % 3 === 0 || num % 5 === 0) {
    return console.log('true');
  } else {
    return console.log('false');
  }
}
divide();
/////////////////////////////////////////////////////////////////////////////////////

// Write a function that accepts an array of test scores as an
// argument. The function should return the number of test scores that
// were an 80 or higher.

function scores(testScores) {
  let total = testScores;
  let numberScore = [];

  for (let i = 0; i < total.length; i++) {

    let highScore = total[i];
    if (highScore >= 80) {
      numberScore.push(i)
    }
  }
  return console.log(numberScore.length);
}
scores();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function that accepts an array of numbers as
// an argument. The function should return the
// sum of all numbers in the array.

function numArray(array) {
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  return sumArray;
}
console.log(numArray([1, 2, 3]));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write an object called carData. Include key:value
// pairs for a sample car’s color, make (e.g. Honda), 
// and year.

let carData = {
  color: 'blue',
  make: 'Honda',
  year: 2017,
  describe: function () {
    return `This is a ${this.color} ${this.year} ${this.make}`;
  }
}
console.log(carData.describe());

var car = 'Ford';

function block() {
  let blockVar = 0;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Next, write a function that listens for the user to enter their first name in the form below, and generates a string with the reply, "It's so nice to meet you, [name]!" Finally, the string that's displayed should be centered horizontally, and all font on the page should be sans-serif.

function listenForSubmit() {
  $('#js-form').submit(function (event) {
    event.preventDefault();
    let newName = $('#name-entry').val();
    // let sentence = `It's so nice to meet you, ${newName}!`;
    let sentence = "It's so nice to meet you, " + newName + "!";
    $('.results').text(sentence);

  });
}
listenForSubmit();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Write a function called `makeOrder`. It should take a table number, an array of order items, and an order status as arguments. It should return an object with the keys `tableNumber`, `order`, and `status` and their associated values.*/
//need to create a function to create an object out of the arguments

function makeOrder(num, array, orderStatus) {
  let tabNum = num;
  let orderItems = array;
  let currentStatus = orderStatus;
  let orderedInfo = {
    tableNumber: tabNum,
    order: orderItems.toString(),
    status: currentStatus,
  };

  return orderedInfo;
  console.log(orderedInfo);
}
makeOrder(1, ['pasta', 'beer'], 'received');
///////////////////////////////////////////////////////////////////////////////////

// palindrome
function isPalindrome(value) {
  return value == value.split('').reverse().join('');
}

function countChar(str, letter) {
  return str.split(letter).length - 1;
}
//  or
function isPalindrome(value) {
  let eulav = value.split('').reverse().join('');
  if (value == eulav) {
    return 'true';
  } else {
    return 'false'
  };
}
///////////////////////////////////////////////////////////////////////////////////

// fizz Buzz

function fizzBuzz(countTo) {
  // create an empty array that will
  // contain our results
  const result = [];
  // count from 1 to `countTo`, and for
  // each number, add the number or its
  // substitution (fizz, buzz, fizzbuzz)
  // to the result array.
  for (let i = 1; i <= countTo; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}

//or
function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    let output = '';
    if (i % 3 == 0) {
      output += 'Fizz';
    }
    if (i % 5 == 0) {
      output += 'Buzz';
    }
    if (output == '') {
      output = i;
    }
    console.log(output);
  }
}
////////////////////////////////////////////////////////////////////////////////////

//function called enrollInSummerSchool that takes a single argument, students. students is an array of objects, with each object representing a student — for example, {name: 'Tim', status: 'Current student', course: 'Biology'}.enrollInSummerSchool should return an array of objects. For each object from the original array, it should return the original name and course, but should update the status to In Summer school

const studentData = [{
  name: 'Tim',
  status: 'Current student',
  course: 'Biology',
},
{
  name: 'Sue',
  status: 'Withdrawn',
  course: 'Mathematics',
},
{
  name: 'Liz',
  status: 'On leave',
  course: 'Computer science',
},
];

//old version but the same is ES6
function enrollInSummerSchoolAlt(students) {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    results.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course,
    });
  }
  return results;
}

//ES6 version
function enrollInSummerSchool(students) {
  return students.map(student => {
    return {
      name: student.name,
      status: 'In Summer school',
      course: student.course,
    };
  });
}
//////////////////////////////////////////////////////////////////////////////////

//function called makeStudentReport that takes a single argument, data. data is an array of objects. Each object in the array represents a student and their letter grade for a course — for example, {name: 'Johnny Robot', grade: 'C'}.makeStudentReport should return an array of strings. For each item in data, return a string that looks like this: '[name]: [grade]'. 

//ES6
function makeStudentsReportAlt(data) {
  return data.map(d => `${d.name}: ${d.grade}`);
}

//old version but the same as ES^
function makeStudentsReport(data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    results.push(`${item.name}: ${item.grade}`);
  }
  return results;
}
////////////////////////////////////////////////////////////////////////////////////

//function called findById. This function takes 2 arguments, items and idNum. items is an array of objects. idNum is the id we're trying to find in items. The function should look for an item with the id idNum in the array items. If found, it should return that item

const scratchData = [{
  id: 22,
  foo: 'bar'
},
{
  id: 28,
  foo: 'bizz'
},
{
  id: 19,
  foo: 'bazz'
},
];

//old version this for loop is the long version of .find()
for (let i = 0; i < items.length; i++) {
  if (items[i].id === idNum) {
    return items[i];
  }
}

//ES6
function findById(items, idNum) {
  return items.find(item => item.id === idNum);
  ////////////////////////////////////////////////////////////////////////////////

  //   function called validateKeys. This function takes 2 arguments, object and expectedKeys. object is (you guessed it!) an object that we want to validate keys for. expectedKeys is an array of keys that we expect to find on the object.  validateKeys should return true if object has all of the keys from expectedKeys, and no additional keys. It should return false if one or more of the expectedKeys is missing from the object, or if the object contains extra keys not in expectedKeys.

  // running the function with `objectA` and `expectedKeys`
  // should return `true`
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };

  const expectedKeys = ['id', 'name', 'age', 'city'];
  //Short ES6 version
  function validateKeys(object, expectedKeys) {
    // if there's not the same number of object keys
    // and expected keys, then we know there are missing or
    // extra keys, so return false
    if (Object.keys(object).length !== expectedKeys.length) {
      return false;
    }

    // we iterate over each expected key and verify that
    // it's found in `object`.
    for (let i = 0; i < expectedKeys.length; i++) {
      if (!Object.keys(object).find(key => key === expectedKeys[i])) {
        return false;
      }
    }
    // if we get to this point in our code, the keys are valid
    // so we return `true`
    return true;
  }

  //Long version
  function validateKeys(object, expectedKeys) {
    // your code goes here
    //first i need to get all the object Keys of expected keys
    //then i need to check if new objectKeys is the same length as expectedKeys
    //if it doesnt match return false
    //then i need to make sure all the keys of the new object match the keys of expectedKeys
    //if they dont match return false
    let objectKeys = Object.keys(object);
    if (objectKeys.length !== expectedKeys.length) {
      return false;
    }
    for (let i = 0; i < objectKeys.length; i++) {
      let currentKey = objectKeys[i];
      let finalAnswer = exist(currentKey, expectedKeys)
      if (finalAnswer != true) {
        return false;
      }
    }
    return true;
  }

  function exist(key, expectedKeys) {
    for (let i = 0; i < expectedKeys.length; i++) {
      let currentKey = expectedKeys[i];
      if (currentKey === key) {
        return true;
      }
    }
    return false;
  }
  ///////////////////////////////////////////////////////////

  //jquery

  <script src="https://code.jquery.com/jquery-3.2.1.min.js" > </script>

  //Listen for form submission, and print the user-submitted value to the console
  function watchSubmit() {
    $('#js-search-form').submit(event => {
      event.preventDefault();
      const query = $(this).find('#zip-code-search').val();
      console.log(query);
    });
  };

  $(watchSubmit);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  // google youtube API credentials key {
  //   AIzaSyDbDK_yKzFivQBrkukDw3lwBVsFgdDUmNY
  // }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  // Bubble Sort

  let items = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

  function bubbleSort(items) {
    //index length of 9
    let arrayLength = items.length;
    //start looping over array
    //step one
    for (let firstLoopPosition = 0; firstLoopPosition < arraylength; firstLoopPosition++) {
      console.log('outer count : ' + firstLoopPostion);

      //step 2
      //start at first element again and run sub loop // 9 - 0 - 1 = 8 -> stop just before the end so that you can check its neighbor
      for (let secondLoopPosition = 0; secondLoopPosition < (arrayLength - firstLoopPosition - 1); secondLoopPosition++) {
        console.log('inner loop count: ' + secondLoopPosition + ' going up to index ' + (arrayLength - firstLoopPostion - 1))

        //compare the neighboring positions positions
        if (items[secondLoopPosition] > items[secondLoopPosition + 1]) {
          console.log('comparing numbers ' + items[secondLoopPosition + 1] + ' at index ' + items.indexOf(items[secondLoopPosition + 1]) + ' and ' + items[secondLoopPosition - 1])
        } else {
          console.log()
        }
      }
    }
  }

  // record collection

  // Setup
  var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": []
    },
    "5439": {
      "album": "ABBA Gold"
    }
  };
  // Keep a copy of the collection for tests
  var collectionCopy = JSON.parse(JSON.stringify(collection));

  // Only change code below this line
  function updateRecords(id, prop, value) {
    if (value === "") {
      delete collection[id][prop];
    } else if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = value;
    }

    return collection;
  }

  // Alter values below to test your code
  updateRecords(2468, "tracks", "test");
  console.log(updateRecords(5439, "artist", "ABBA"));
