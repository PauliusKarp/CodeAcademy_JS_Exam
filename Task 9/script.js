/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

// Movie class
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100_000_000 ? true : false;
  }
}

const newMovie = new Movie(
  "The Lord of the Rings: The Fellowship of the Ring",
  "Peter Jackson",
  93_000_000
);
console.log(newMovie);
console.log(newMovie.wasExpensive());

// show in HTML
function showHTML(obj) {
  document
    .querySelector("body")
    .insertAdjacentHTML("afterbegin", `<p>Movie name: ${obj.title}</p>`);
  document
    .querySelector("body")
    .insertAdjacentHTML("beforeend", `<p>Movie director: ${obj.director}</p>`);
  document
    .querySelector("body")
    .insertAdjacentHTML("beforeend", `<p>Movie budget: ${obj.budget} $</p>`);

  const expensive = obj.wasExpensive(obj.budget);
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      `<p>Movie budget was ${
        expensive ? "more" : "less"
      } than 100,000,000 USD</p>`
    );
}
showHTML(newMovie);
