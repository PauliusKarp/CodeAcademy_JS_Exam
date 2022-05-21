/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

fetch(ENDPOINT)
  .then((response) => {
    if (response.ok) return response.json();
    else {
      throw new Error("Connection not possible");
    }
  })
  .then((data) => {
    document.querySelector("#btn").addEventListener("click", () => {
      data.forEach((element) => {
        console.log(data);
        document
          .querySelector("#output")
          .insertAdjacentHTML(
            "beforeend",
            `<p>${
              element.login.slice(0, 1).toUpperCase() + element.login.slice(1)
            }</p><img src="${element.avatar_url}"><br>`
          );
      });
    });
  })
  .catch((error) => console.log("Error", error));
