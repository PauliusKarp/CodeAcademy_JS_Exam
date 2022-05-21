/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// Define relevant HTML element selectors
const btnElement = document.querySelector("#btn__element");
const btnCounter = document.querySelector("#btn__state");

function clickMe() {
  // Set variable for click counter
  let clickCounter = 0;
  // Invoke addEventListener method on button element
  btnElement.addEventListener("click", () => {
    // Each click increase counter +1
    clickCounter++;
    // After counter increased display on btn__state HTML element
    btnCounter.textContent = clickCounter;
  });
}

// Invoce clickMe function
clickMe();
