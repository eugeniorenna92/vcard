/**
 * Classe usata per il testo da scrivere nella sezione Home.
 */
class Typed {
  element;
  text;

  constructor(element, text) {
    this.element = element;
    this.text = text;
  }
}



/**
 * Animazione per scrivere il testo della sezione Home.
 */
function writeTypedText() {
  let nome = new Typed(document.getElementById("name"), "Enrico "); // Lascia lo spazio finale
  let cognome = new Typed(document.getElementById("surname"), "Renna");
  let sottotitolo = new Typed(document.getElementById("subtitle"), "La renna di cui non pensavi di aver bisogno!");

  // Animazione
  typedText = (element, text, i = 0) => {
    element.textContent += text[i];
    
    // Quando finisce di scrivere
    if (i === text.length - 1) {
      // Scrive il cognome
      if (element === nome.element) typedText(cognome.element, cognome.text);
      // Scrive il sottotitolo
      if (element === cognome.element) {
        let cursors = document.querySelectorAll("span.text-cursor");
        cursors[0].classList.add("d-none");
        cursors[1].classList.remove("d-none");
        typedText(sottotitolo.element, sottotitolo.text);
      }
      return;
    }
    
    setTimeout(() => typedText(element, text, ++i), 50);
  }

  typedText(nome.element, nome.text);
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
  
  const active = document.querySelector(".active");
  if (!!active) active.classList.remove("active");
  element.classList.add("active");

  if (hash === "#home" && !isWritten) {
    writeTypedText();
    isWritten = true;
  }
});
