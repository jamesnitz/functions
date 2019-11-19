// Supplementary Function Practice Exercise 1
const faveDogBreed = (breed) => {
  if (breed === "meow") {
    return 'I like cats'
  } else {
    return `my favorite breed is ${breed}`;
  }
}
let myFavorite = faveDogBreed('meow')
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
const array1 = [1, 5, 6, 3, 1, 10, 9]

evenOrOdd(array1);

// Exercise 5