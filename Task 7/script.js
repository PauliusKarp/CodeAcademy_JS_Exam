/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

console.log(Object.getOwnPropertyNames(audi));

// Get object keys
const showObjectKeys = (obj) => Object.keys(obj);
// console.log(showObjectKeys(audi));

// Show object keys in HTML as list element
let HTMLText = `<p>Object keys:<ul>`;

showObjectKeys(audi).forEach((el) => {
  HTMLText += `<li>${el}</li>`;
});

HTMLText += "</ul>";

document.querySelector("body").insertAdjacentHTML("afterbegin", HTMLText);
