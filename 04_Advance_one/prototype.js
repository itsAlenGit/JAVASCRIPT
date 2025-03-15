let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spioder power is ${this.spiderman}`);
  },
};

Object.prototype.alen = function () {
  console.log("Alen is present in all object");
};

Array.prototype.heyAlen = function () {
  console.log(`Alen says hello`);
};

//heroPower.alen();
//myHeros.alen();
//myHeros.heyAlen();
//heroPower.heyAlen();

//Inheritence

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailble: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
};

//Mordern syntax
//Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TeachingSupport.makeVideo);

let anotherUsername = "ChaiAurCode       ";

String.prototype.trueLength = function () {
  console.log(`${this}`);

  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Alen".trueLength();
"iceTea".trueLength();
