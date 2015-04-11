var dog = {};
dog.name = 'fido';
dog.age = 3;

// can create an object like this too
var cat = {name:'fluffy', age:5};
console.log(dog, cat);

// give the cat some toys
cat.toys = ['fluff', 'scratch post', 'mouse'];
console.log(cat);

console.log('')
console.log('OMG I forgot to give cat another toy');

cat.toys.push('small box');
console.log(cat);
console.log('cat doesnt like scratch post so remove with splice');
cat.toys.splice(1,1);
console.log(cat);

console.log('');
console.log('creating a constructor for Cat object');
function Cat(name, age){
  this.name = name;
  this.age = age;
}
// this creates new Cat object
 var fluffy = new Cat('Miss Sassypants', 3);
// to verify that this code works
console.log('fluffy', fluffy);
