/**
 * Animazione per scrivere il testo della sezione Home.
 */
function writeTypedText() {
  const title = "Nome Cognome";
  const subtitle = "Il tuo sviluppatore web di fiducia";
  let h1 = document.getElementById("title");
  let h2 = document.getElementById("subtitle");

  // Animazione
  typedText = (element, text, i = 0) => {
    element.textContent += text[i];
    if (i === text.length - 1) {
      if (element === h1) {
        document.querySelector("span.text-cursor-h1").classList.add("d-none");
        document.querySelector("span.text-cursor-h2").classList.remove("d-none");
        typedText(h2, subtitle);
      }
      return;
    }
    setTimeout(() => typedText(element, text, ++i), 50);
  }

  typedText(h1, title);
}



// Quando carica tutto aggiunge le classi per nascondere il loader e inizia a scrivere il testo della sezione Home
window.onload = () => {
  let loader = document.getElementById("loader");
  loader.classList.add("hide");
  setTimeout(() => {
    loader.classList.add("d-none");

    if (window.location.hash === "#home") writeTypedText();
  }, 1000);
};



// Aggiunge l'anno corrente all'elemento copyright
document.querySelector("p.currentYear").innerHTML += ` ${new Date().getFullYear()}`;



// Imposta la classe "active" all'elemento corretto e fa partire la scrittura del testo della sezione Home se ci si sposta su di essa
const tmpHash = window.location.hash;
window.location.hash = "";
window.location.hash = tmpHash === "" ? "home" : tmpHash;
let isWritten = window.location.hash === "#home";

addEventListener("hashchange", (event) => {
  
  const hash = event.currentTarget.location.hash;
  const id = hash.split("").slice(1).join("");
  const element = document.querySelector("a#a-" + id);
  
  if (!!element) {
    const active = document.querySelector(".active");
    if (!!active) active.classList.remove("active");
    element.classList.add("active");
  }

  if (hash === "#home" && !isWritten) {
    writeTypedText();
    isWritten = true;
  }
});
