/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
"use strict";

// Define variables representing HTML element selectors
const submitBtn = document.querySelector("#submit-btn");
const kgInput = document.querySelector("#search");
const weightOutput = document.querySelector("#output");

// Function takes input from user
const convertKg = function () {
  // Event listener function on the submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // User input in kg
    const value = Number(kgInput.value);
    // Conversion from kg to pounds, grams and ounces
    const kgConverted = `<div class='converter'><p>${value} kilograms converted into:<p>
    <ul><li>Pounds: ${(value * 2.2046).toFixed(2)} lb</li>
    <li>Grams: ${Math.trunc(value / 0.001)} g</li>
    <li>Ounces: ${(value * 35.274).toFixed(2)} oz</li></ul></div>`;
    // Display output in HTML <div> element
    weightOutput.insertAdjacentHTML("afterbegin", kgConverted);
    // Set output styling class
  });
};

// Caling to function
convertKg();
