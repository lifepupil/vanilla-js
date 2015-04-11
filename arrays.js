

// array literal
var a = [];
var b = [1,3,5];
console.log(a,b);

b.push(9);
b.push(11);
console.log(b);

var c = b.pop();
console.log(b,c);

b.unshift(1);
b.unshift(-1);
console.log('after unshift',b);

var d = b.shift();
console.log('after shift',b,d);

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
console.log('this is b');
console.log(b);

var isOdd = b.every(function(curr, index, arr) {
  // console.log('inside every');
  // console.log(curr, index, arr);
  return curr%2;
});
console.log('isOdd', isOdd);

b.push(30);
isOdd = b.every(function(curr, index, arr) {
  return curr%2;
});
console.log(b);
console.log('isOdd', isOdd);

// .filter
var animals = ['dog', 'cat', 'mouse', 'goat', 'bear'];
var oddLengthedAnimals = animals.filter(function(curr,index,arr) {
  return !(curr.length%2);
});
console.log('animals', animals, 'evenlengthedanimals', oddLengthedAnimals);

// arr.forEach
animals.forEach(function(curr,index, arr){
  console.log('look, i am looping', curr);
});


// arr.indexOf
var indexOfMouse = animals.indexOf('mouse');
console.log('the index of the mouse is', indexOfMouse);

//arr.join is the opposite of arr.split
var joinedAnimals = animals.join(' and ');
console.log('the joined animals are', joinedAnimals);

// using the map function (again)
var primes = [1,3,5,7,11,13,17,19];
var squaredPrimes = primes.map(function(curr, index, arr){
  return curr * curr;
});
console.log('primes', primes, 'squaredPrimes', squaredPrimes);
console.log("");

// arr.reduce
// prev is the value that is accumulating
var summedPrimes = primes.reduce(function(prev, curr, index, arr){
  console.log('inside reduce');
  console.log(prev, curr, index, arr);
  return prev + curr;
});
console.log('');

// arr.reverse
// var reversedPrimes = primes.reverse(function(){});
var reversedPrimes = primes.reverse();
console.log(primes);
var reversedPrimes = primes.reverse();
console.log('');
// arr.slice
// copies a part of an array
var primes1 = primes.slice();
var primes2 = primes.slice(-2);
var primes3 = primes.slice(2,6);

console.log('p1', primes1, 'p2', primes2, 'p3', primes3);
var primes4 = primes.slice(2,-2);
console.log('p4', primes4);
console.log('');

// arr.some is like .every but asks whether there is at least one, i.e it is like any
var someOdd = [3,4,5,6].some(function(curr, index, arr){
  return curr%2;
});
console.log('someOdd', someOdd);
console.log('')

// arr.sort
console.log('arr.sort')
var sortedAnimals = animals.sort();
console.log('animal sort with no function', sortedAnimals);


var somenums = [3,731,220,50,18,99,-2];
somenums.sort();
console.log('somenums sorted not so well', somenums);
somenums.sort(function(a,b){
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log('somenums sort using a compare function', somenums);
console.log('');

// arr.splice does array manipulation in the middle (as opposed to pop or shift for example)
console.log('arr.splice');
var morenums = [4,5,6,7];
console.log('morenums before splice', morenums);
morenums.splice(1,1);
console.log('spliced 5 from morenums', morenums);
console.log('adding something after the 6, i.e at element index = 2');
morenums.splice(2,0,77);
console.log('spliced a 77 into morenums', morenums);

console.log('');
// arr.toString
console.log('arr.toString');
morenums.toString();
console.log(morenums);
