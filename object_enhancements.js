/*
refactor into ES2015:

function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

let firstName = "Nicole";
let lastName = "Ferrucci";

/*
refactor into ES2015:

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

*/

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

/*
refactor into ES2015:

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName  + "says bye!";
  }
}

*/

const instructor1 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

/*
createAnimal Function

Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.

*/

const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    console.log(noise);
  },
});

const cat = createAnimal("cat", "meow", "meow meow");
const dog = createAnimal("dog", "bark", "woof woof");

cat.meow(); // Output: "meow meow"
dog.bark(); // Output: "woof woof"
