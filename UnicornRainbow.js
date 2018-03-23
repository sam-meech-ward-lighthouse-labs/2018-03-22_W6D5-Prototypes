function newUnicorn() {
  const obj = {};
  obj.horn = true;
  obj.__proto__ = Unicorn.prototype;
  return obj;
}

function Unicorn(name) {
  this.name = name;
}

const paul = new Unicorn("paul");
// paul.trott(); doesn't exist yet

Unicorn.prototype.horn = true;
Unicorn.prototype.isNice = true;
Unicorn.prototype.trott = function() {
  console.log(this.name + " is troitting");
}
paul.trott();


console.log(paul); // [[Prototype]]
// console.log(paul.__proto__ === Unicorn.prototype);
const paulProto = Object.getPrototypeOf(paul);
console.log(paulProto === Unicorn.prototype);
const paulProtoProto = Object.getPrototypeOf(paulProto)
console.log(paulProtoProto);
console.log(Object.prototype);
console.log(paulProtoProto === Object.prototype);

const object = new Object();
const objectProto = Object.getPrototypeOf(object);
console.log(objectProto === Object.prototype);

console.log(Object);
console.log(typeof Object);

console.log(Array);
console.log(typeof Array);


// const object = {};

// const array = new Array();
const array = [];

console.log(array.forEach);
console.log(array);
console.log(Array.prototype);

for (const prop in array) {
  console.log(prop);
}


console.log(Object);
console.log(Object.prototype);

Object.prototype.logPlace = function() {
  console.log("I'm here" + typeof this);
}

const emojis = ["🤗"];
emojis.logPlace();

const something = "";
something.logPlace();

// $.prototype.explode = function() {
  
// }

// Unicorn.prototype.trott = function() {
//   "explode()";
// }

// $('div').explode();

Object.prototype.toString = function() {
  return "💩";
}

const lastArray = [];

for (const key in lastArray) {
  console.log("key in array");
  console.log(key);
}
