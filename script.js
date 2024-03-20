/**
 * Funzione che aggiunge la classe "active" all'elemento corretto.
 * @param li Elemento li
 */
function setActive(li) {
  const active = document.querySelector(".active");

  if (!!active) active.classList.remove("active");

  li.classList.add("active");
};

document.querySelector("p.currentYear").innerHTML += ` ${new Date().getFullYear()}`;

window.onload = () => {
  let loader = document.getElementById("loader");
  loader.classList.add("hide");
  setTimeout(() => loader.classList.add("displayNone"), 1000);
};

const id = document.URL.split("#").pop() ?? "home";
const element = document.querySelector("a#a-" + id);

if (!!element) {
  setActive(element);
  window.location.hash = "";
  window.location.hash = id;
}

const liActive = document.querySelectorAll(".nav-link");

liActive.forEach(li => li.addEventListener("click", () => setActive(li)));
