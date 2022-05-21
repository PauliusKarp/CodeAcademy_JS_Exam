yes;

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "./cars.json";

fetch(ENDPOINT)
  .then((response) => {
    if (response.ok) return response.json();
    else throw new Error("Wrong file");
  })
  .then((data) => {
    // data.forEach((el) => console.log(el.models));
    // data.models.forEach((el) => console.log(el));
    data.forEach((el) => {
      const models = el.models.map((el) => `<li>${el}</li>`).join("");
      document.querySelector("#output").insertAdjacentHTML(
        "afterbegin",
        `<div class="style"><p>Brand: <span>"${el.brand}"</span> has the following models: </p><ul>${models}</li></ul>
          <div>`
      );
    });
  })
  .catch((error) => console.log("Error", error));
