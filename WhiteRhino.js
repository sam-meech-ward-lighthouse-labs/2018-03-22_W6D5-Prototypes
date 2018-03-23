const whiteRhyno = {
  hasAHorn: "Probably not anymore",
  isNice: true,
  grass: "☘️",
  eatGrass: function() {
    console.log("Eating: "+this.grass+this.hasAHorn);
  }
};
whiteRhyno.eatGrass();

const babyWhiteRhyno = {
  grass: "🥛"
};

console.log(babyWhiteRhyno.eatGrass);

Object.setPrototypeOf(babyWhiteRhyno, whiteRhyno);

console.log(babyWhiteRhyno.eatGrass);
babyWhiteRhyno.eatGrass();

// babyWhiteRhyno.[[prototype]]
// babyWhiteRhyno.__proto -> Object.prototype
// whiteRhyno.__proto__ -> Object.prototype

// babyWhiteRhyno.__proto -> whiteRhyno -> whiteRhyno.__proto__ -> Object.prototype

// console.log(Object.getOwnPropertyNames(whiteRhyno));
// console.log(whiteRhyno.reproduce);
// console.log(whiteRhyno.toString);

const teenWhiteRhyno = Object.create(whiteRhyno);
teenWhiteRhyno.grass = "🤗";
// This does two things: 
// {}
// setPrototypeOf