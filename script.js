setActive = (li) => {
  const active = document.querySelector('.active');
  if (!!active) {
    active.className = 'd-flex align-items-center nav-link';
  }

  li.className = 'd-flex align-items-center nav-link active';
};

const id = document.URL.split("#").pop() ?? "home";
const element = document.querySelector("a#a-" + id);

if (!!element) {
  setActive(element);
  window.location.hash = "";
  window.location.hash = id;
}

const liActive = document.querySelectorAll('.nav-link');

liActive.forEach(li => {
  li.addEventListener('click', () => setActive(li));
});
