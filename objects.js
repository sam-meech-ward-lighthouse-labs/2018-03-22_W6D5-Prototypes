class Cat {
  constructor(color, hairLength, isNice) {
    this.color = color;
    this.hairLength = hairLength;
    this.isNice = isNice;
    this.legs = 4;
    this.hasTail = true;
  }
  meow() {
    console.log("😻" + this.color);
  }
  bites() {
    console.log("🖕");
  }
}

class Lion extends Cat {
  roar() {
    super.meow();
    console.log("ajksjahaha");
  }
}

const bob = new Cat('grey', "short", false);
bob.meow();

const simba = new Lion('🦁', "Lion length", true);
simba.roar();
simba.bites();


console.log(Cat);
console.log(Lion);

function Sam() {

}

console.log(Sam);