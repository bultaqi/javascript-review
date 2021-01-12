let favoriteSandwich = "Rueben";

let leastFavoriteSandwich = {
  sandwichName: "Mud sandwich",
  price: 11.99,
  ingredients: ["bread", "mud", "mustard"],
};

console.log(leastFavoriteSandwich.ingredients[0]);

let menu = [
  {
    sandwichName: "Tomato sandwich",
    price: 6.99,
    ingredients: ["bread", "mayo", "tomato", "salt and pepper"],
  },
  leastFavoriteSandwich,
  {
    sandwichName: "Rueben",
    price: 9.99,
    ingredients: [
      "bread",
      "corned beef",
      "saurkraut",
      "thousand island dressing",
    ],
  },
];

// let ruebenIngredients = menu[2].ingredients;
// console.log("this is rueben ingredietns", ruebenIngredients)
// // Loop through ingredients for just a rueben
// for(let i = 0; i < ruebenIngredients.length; i++){
//     console.log(ruebenIngredients[i])
// }

// // Loop through all the sandwiches
// for(let i = 0; i < menu.length; i++){
//     console.log("this is i", i)
//     console.log(menu[i].sandwichName)
//     // console.log(menu[i].ingredients)
//     for(let j = 0; j < menu[i].ingredients.length; j++){
//         console.log(menu[i].ingredients[j])
//     }
// }

// console.log(menu[2].sandwichName)
// console.log(menu[2].ingredients[1]) // corned beef

// for(let i = 0; i < menu.length; i++){
//     if(menu[i].sandwichName === favoriteSandwich){
//         console.log("CHEF'S CHOICE", menu[i].sandwichName)
//     } else {
//         console.log(menu[i].sandwichName)
//     }

// }

// for (let i = 0; i < menu.length; i++) {
//   if (menu[i].price < 10) {
//     console.log(`SALE ${menu[i].sandwichName} - ${menu[i].price}`);
//   } else {
//     console.log(menu[i].sandwichName);
//   }
// }

// Write a function that takes in the name of my franchise owner and returns an array of menu items with that person's name tacked onto the beginning

function createFranchiseMenu(franchiseOwnerName) {
  let franchiseMenuArray = [];
  console.log("This franchise belongs to:", franchiseOwnerName);
  //Loop over the menu array
  for (let i = 0; i < menu.length; i++) {
    // Modify every sandwich name to include the franchise owner's name
    let currentSandwichObject = menu[i];
    let currentSandwichName = currentSandwichObject.sandwichName;
    // Object for new sandwich menu
    let newSandwich = {
      sandwichName: `${franchiseOwnerName}'s ${currentSandwichName}`
    }
    // Push it into the new franchise menu
    franchiseMenuArray.push(newSandwich)
  }

//   console.log(franchiseMenuArray)
  return franchiseMenuArray;
}


// Call the function
// let vincentMenu = createFranchiseMenu("Vincent");
// let angieMenu = createFranchiseMenu("Angie");
// let mandyMenu = createFranchiseMenu("Mandy");
// let thomasMenu = createFranchiseMenu("Thomas");

// console.log(vincentMenu)



function displayName (firstName, lastName) {
  console.log(`${firstName} ${lastName}`)
}

displayName("Jamal", "Haynes")


// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//   // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0)
//       console.log(currentNumber, "ChickenMonkey!")
//     else if (currentNumber % 5 === 0) {
//       console.log(currentNumber, "Chicken") // Only 2, 4, 6 will appear
//   } else if (currentNumber % 7 === 0) {
//       console.log(currentNumber, "Monkey")
//   } else {
//       console.log(currentNumber)
//   }
// }

//This is a global variable that can be accessed from the function 
let bandNumber = 0

// The fuction is taking a single parameter; The name of the band.
const takeNumber = function (bandz) {
  //The global variable is being accessed from the function to start the count and one to itself.
    bandNumber = bandNumber + 1
  //The function is returning the value of the count and the name of the band as an interpolated string.
    return `${bandNumber} ${bandz}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console




const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];



function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};


//This for loop is to go throough the foods array until its reached it length.
for (let i = 0; i < foods.length; i++) {
  //This function is calling the grill function and passing the foods array as parameter; looping through its indexs
  grill(foods[i])
  console.log(cookedFood[i])
}











function addExcitement () {
  console.log()
}