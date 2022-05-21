/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

const userAgeAverage = (input) =>
  Math.trunc(input.reduce((acc, cur) => acc + cur.age, 0) / input.length);

console.log(userAgeAverage(users));

const userAgeAverageHTML = `<p>Average users age: ${userAgeAverage(users)}</p>`;

document
  .querySelector("body")
  .insertAdjacentHTML("afterbegin", userAgeAverageHTML);

const userNames = (input) => input.map((el) => el.name);
console.log(userNames(users));

let userNamesHTML = "<p>User names: </p><ul>";
userNames(users).forEach((el) => {
  userNamesHTML += `<li>${el}</li>`;
});
userNamesHTML += "</ul>";
document.querySelector("body").insertAdjacentHTML("beforeend", userNamesHTML);
