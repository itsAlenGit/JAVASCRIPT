function muliplyBy5(num) {
    return num * 5;
  }
  muliplyBy5.power = 2;
  console.log(muliplyBy5(5));
  console.log(muliplyBy5.power);
  console.log(muliplyBy5.prototype);
  
  function createUser(username, score) {
    this.username = username;
    this.score = score;
  }
  
  createUser.prototype.increment = function () {
    this.score++;
  };
  
  createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
  };
  
  const chai = new createUser("chai", 25);
  const tea = new createUser("Tea", 250);
  
  chai.increment();
  chai.printMe();
  tea.printMe();
  console.log(createUser.prototype);
  
  /**
   Here's what happens behind the scenes when the new keyword
   is used:
  
   A new object is created: The new keyword innitiates the
   creation of a new JavaScript object.
  
   A prototype is Linked: The newly created object gets linked
   to the prototype property of the constructor function.This means that it has access to properties and methods defined
   on the construcotor's prototype.
  
   
   */
  