// let headingElement = document.querySelector("#main-heading");

// headingElement.innerHTML = "Hello, world!";




// let greeting = document.querySelector("#hello-container")

// greeting.innerHTML = "Hello, world"

// In your index.html file, add an h1 element with an id of #hello-container.
// In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
// Use document.querySelector to target your #hello-container
// User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.




// let choresArray = ["sweep", "mop", "wash dishes", "take out trash", "clean ears", "wipe off counters"]

// for (let i = 0; i < choresArray.length; i++) {
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
// }



// Use document.querySelector() to grab a reference to each element in your HTML.
// Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

// let movieObject = {
//     title: "Star Wars: A New Hope",
//     genre: "Science Fiction",
//     releaseDate: "May 25, 1977"
//   }

// let movieTitle = document.querySelector("#title")
// movieTitle.innerHTML = movieObject.title
// let movieGenre = document.querySelector("#genre")
// movieGenre.innerHTML = movieObject.genre
// let movieRealeaseDate = document.querySelector("#release-date")
// movieRealeaseDate.innerHTML = movieObject.releaseDate

// Loop over the downtownRestaurants array.
// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.


// let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// for (let i = 0; i < downtownRestaurants.length; i++) {
//     document.querySelector("#restaurant-list").innerHTML = document.querySelector("#restaurant-list").innerHTML + `<li>${downtownRestaurants[i]}</li>`
// }

// Write a function that does the following things:
// - Loop through sandwichToppings
// - Build an <li> element for each item in the array.
// - Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

function sandwichLooper() {

    for (let i = 0; i < sandwichToppings.length; i++) {
        document.querySelector("#restaurant-list").innerHTML += `<li>${sandwichToppings[i]}`
    }
}

sandwichLooper()








let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]


for (let i = 0; i < movieSchedule.length; i++) {
    document.querySelector("#movie-schedule").innerHTML = scheduleVar;
}

let scheduleVar = `<h1 id="movie-title">${movieSchedule.title}</h1>
<h5 id="movie-rating">${movieSchedule.rating}</h5>
<h3 id="playing">${movieSchedule.currentlyPlaying}</h3>
<p id="poster">${movieSchedule.poster}</p>`





// Use a for loop to loop through the movies, build an HTML representation of each movie, and insert it into the #movie-schedule container in the DOM.
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.