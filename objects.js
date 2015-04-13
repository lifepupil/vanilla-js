// var dog = {};
// dog.name = 'fido';
// dog.age = 3;
//
// // can create an object like this too
// var cat = {name:'fluffy', age:5};
// console.log(dog, cat);
//
// // give the cat some toys
// cat.toys = ['fluff', 'scratch post', 'mouse'];
// console.log(cat);
//
// console.log('')
// console.log('OMG I forgot to give cat another toy');
//
// cat.toys.push('small box');
// console.log(cat);
// console.log('cat doesnt like scratch post so remove with splice');
// cat.toys.splice(1,1);
// console.log(cat);
//
// console.log('');
// console.log('creating a constructor for Cat object');

function Cat(name, age){
  // the this. refers to the object
  this.name = name;
  this.age = age;
}



Cat.prototype.purr = function() {
  console.log(this.name+' is purring')
}
// this creates new Cat object
var fluffy = new Cat('fluffy', 3);
fluffy.purr();

var molly = new Cat('molly', 5)
molly.purr();
