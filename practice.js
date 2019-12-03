// Supplementary Function Practice Exercise 1
const faveDogBreed = (breed) => {
  if (breed === "meow") {
    return 'I like cats'
  } else {
    return `my favorite breed is ${breed}`;
  }
}
let myFavorite = faveDogBreed('Schnauzer')
console.log(`When it comes to pets, ${myFavorite}`);

// Exercise 2
const totalSum = (val1, val2, val3) => {
  console.log(val1 + val2 + val3)
}

totalSum(17, 4, 11);


// Exercise 3

const go = (direction, speed) => {
  if (direction === 'forward' && speed < 75) {
    console.log("The car is moving forward at " + speed + " mph.");
  } else if (direction === 'forward' && speed > 75) {
    console.log("The car is moving forward at " + speed + " mph. Slow Down!");
  } else if (direction === 'backwards') {
    console.log("The car is moving backwards at " + speed + " mph.");
  } else {
    console.log("The car is moving in circles at " + speed + " mph.");
  }
}

go("forward", 100)

// Exercise 4
const evenOrOdd = (arr) => {
  for (let i of arr) {
    if (i % 2 === 0) {
      console.log("Even")
    } else {
      console.log("Odd");
    }
  }
}
const person1 = [1, 5, 6, 3, 1, 10, 9]

evenOrOdd(person1);

// Exercise 5
const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"]

//   const removal = (array) => {
//     let newWords = []
//     for (const word of array) {
//       if (!word.startsWith("k")) {
//         newWords.push(word);
//       }
//     }
//     return newWords;
//   }

// const finalsentence = removal(words).join(" ");
// console.log(finalsentence);

// For EACH LOOPS
const filterK = (arrayofWords) => {
  let wordsWithoutK = []
  arrayofWords.forEach((word) => {
    if (!word.startsWith("k")) {
      wordsWithoutK.push(word)
    }
  });
  return wordsWithoutK
}
let sentence = filterK(words).join(" ")
console.log(sentence)


// Exercise 6 Sven's Fish
const fish = () => {
  const num = Math.random() * 2
  if (num < 1 && num > 0 ) {
    console.log("Sven hooked a Tuna!");
  } else if (num < 2 && num > 1) {
    console.log("Sven came up empty-handed");
  }
}
fish()

// Exercise 7

// {
//   "sandwich": "Ultimate Slammer",
//   "side": "Potato wedges",
//   "drink": "Mr. Pepper",
//   "dessert": "Fudge sundae"
// }

const orderMeal = (sandwich, side, drink, dessert) => {
  const newMeal =
  {
    "sandwich": sandwich,
    "side": side,
    "drink": drink,
    "dessert": dessert
  }
  return newMeal
}
console.log(orderMeal("burger", "fries", "drank", "pie"));



// Exercise 8 CHORES

const person = 
{
  firstName: "James",
  lastName: "Nitz"
}

const grocery = (person) => {
  let groceryRun = `${person.firstName} ${person.lastName} went to the grocery Store,`;
  return groceryRun;
}
const liquorStore = (person) => {
  let liquorStorestr = `${person.firstName} ${person.lastName} procurred a thirty rack, bro,`;
  return liquorStorestr;
}
const oilChange = (person) => {
  let oilChangestr = `${person.firstName} ${person.lastName} got his oil changed,`;
  return oilChangestr;
}
const hairCut = (person) => {
  let hairCutstr = `${person.firstName} ${person.lastName} got fresh to death,`;
  return hairCutstr;
}
const dogShelter = (person) => {
  let dogShelterstr = `${person.firstName} ${person.lastName} played with the pups,`;
  return dogShelterstr;
}
const climbGym = (person) => {
  let climbGymstr = `${person.firstName} ${person.lastName} flashed a few V10's, nbd brah,`;
  return climbGymstr;
}

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
  let sentence = `${firstChore(person)} and ${secondChore(person)} and ${thirdChore(person)}`
  return `${sentence} on ${day}.`
}

console.log(dayPlanner(dogShelter, climbGym, hairCut, person, "Thursday"));


// exercise 9 IN CLASS CODING
const tellMeAboutYourDog = (name, genderPronoun, weight) => {
  console.log(`My dog's name is ${name}, and ${genderPronoun} weighs ${weight} lbs.`)
} 

tellMeAboutYourDog("roscoe Dash", "he", 90)