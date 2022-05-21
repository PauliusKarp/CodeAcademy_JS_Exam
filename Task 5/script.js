/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

// Filters array to
const filterDogOwersFn = (owners) => [
  ...owners.filter((el) => el.hasDog === true),
];
const filterDogOwers = filterDogOwersFn(users);
console.log(filterDogOwers);

const filterAdultsFn = (adults) => [...adults.filter((el) => el.age >= 18)];
const filterAdults = filterAdultsFn(users);
console.log(filterAdults);

const contentDogOwners = document.querySelector(".dogOwners");
const contentAdults = document.querySelector(".adults");

// Display output in HTML <div> element
// contentDogOwners.insertAdjacentHTML("afterbegin", kgConverted);

function createHTML(filterDogOwners, filterAdults) {
  // Creates list of owners that have dogs
  let containerDogOwners = "<p>Owners that have dogs:</p><ul>";

  filterDogOwers.forEach((el) => {
    containerDogOwners += `<li>${el.name} has dog: ${el.hasDog}</li>`;
  });
  containerDogOwners += "</ul>";
  contentDogOwners.insertAdjacentHTML("afterbegin", containerDogOwners);

  // Creates list of owners that are adults
  let containerAdults = "<p>Owners that are adults:</p><ul>";
  filterAdults.forEach((el) => {
    containerAdults += `<li>${el.name} of age ${el.age}</li>`;
  });
  containerAdults += "</ul>";
  contentDogOwners.insertAdjacentHTML("beforeend", containerAdults);
}

createHTML(filterDogOwers, filterAdults);
