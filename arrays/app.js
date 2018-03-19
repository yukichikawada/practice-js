Array.prototype.myForEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
  // returns undefined
};

Array.prototype.myMap = function(cb) {
  let newArr = [];

  this.myForEach((el) => {
    newArr.push(cb(el));
  });

  return newArr;
}

function timesTwo(el) {
  return el * 2;
}

function timesTwoArr(array) {
  let arr = [];

  array.myForEach( (el) => {
    arr.push(el * 2);
  });

  return arr;
}

function timesTen(arr) {
  return arr.myMap((el) => {
    return el * 10;
  });
}


console.log(timesTwoArr([1, 2, 3, 4, 5]));
console.log([6, 7, 8, 9, 10].myMap(timesTwo));
console.log(timesTen([1, 2, 3, 4, 5]));

function vowelCount(string) {
  let letters = string.split("");
  let count = {};
  let vowels = "aeiou";

  letters.myForEach((letter) => {
    if (vowels.indexOf(letter) !== -1) {
      if (letter in count) {
        count[letter]++;
      } else {
        count[letter] = 1;
      }
    }
  });

  return count;
}

console.log(vowelCount("aaaaabbccddseeioudlkeuy"))


Array.prototype.myFilter = function(cb) {
  let filtered = [];

  this.myForEach((el) => {
    if (cb(el) === true) filtered.push(el);
  });

  return filtered;
};

function overThree(num) {
  return num > 3;
}

function hasE(words) {
  return words.myFilter((word) => {
    return word.includes("e");
  });
}

console.log([1, 2, 3, 4, 5].myFilter(overThree));
console.log(hasE(["there", "their", "thurrr", "chingy"]));

function myFindEl(arr, val) {
  return arr.myFilter((el) => {
    return el === val;
  })[0];
}

console.log(myFindEl([1, 2, 3, 4, 5], 3));


function myFindInObj(arr, key, val) {
  return arr.myFilter((el) => {
    return el[key] === val;
  })[0];
}

objArrOfHashes = [
  { name: 'sam', cat: 'willow'},
  { name: 'alex', cat: 'peanut'},
  { name: 'carl', cat: 'berger'},
]

console.log(myFindInObj(objArrOfHashes, "cat", "peanut"));

function devowel(string) {
  const vowels = "aeiou";

  return string.split("").myFilter((letter) => {
    return !vowels.includes(letter)
  }).join("");
}

console.log(devowel("california best coast"));


// returns boolean, similar to #any? #includes?
Array.prototype.mySome = function(val) {
  let result = false;

  this.myForEach((el)=> {
    if (el === val) {
      result = true;
      console.log("is true but returns false" + this);
      return;
    };
  });

  return result;
};

function divisibleByTwo(num) {
  return num % 2 === 0;
}

// console.log("divisible by two");
// console.log(divisibleByTwo(2));
// // console.log(divisibleByTwo(3));
// // console.log(divisibleByTwo(5));
// console.log(divisibleByTwo(6));
//
// // console.log([1, 2, 3, 4, 5].mySome(3));
// // console.log([1, 2, 3, 4, 5].mySome(8));
// console.log("my some divisibleByTwo");
// // console.log([1, 2, 3, 4, 5].mySome(divisibleByTwo));
// console.log([1, 2, 3, 5].mySome((el) => { return num % 2 === 0}));
// // console.log(["a", "b", "c", "d"].mySome("c"));
// // console.log(["a", "b", "c", "d"].mySome("z"));
// console.log("--------------------");
//
// function hasFactorsOfThree(array) {
//   return array.mySome((el) => {
//     return el % 3 === 0;
//   });
// };
//
// console.log(hasFactorsOfThree([1, 2, 4, 5]));
// console.log(hasFactorsOfThree([3]));


Array.prototype.myReduce = function(cb) {
  let firstVal = this[0];

  for (var i = 1; i < this.length; i++) {
    firstVal = cb(firstVal, this[i]);
  }

  return firstVal;
}

function plus(a, b) {
  return a + b;
}

function minus(array) {
  return array.myReduce((acc, el) => {
    return acc - el;
  });
}

console.log([1, 2, 3, 4, 5].myReduce(plus));
console.log(minus([5, 2, 1]));
