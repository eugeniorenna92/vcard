const liActive = document.querySelectorAll('.nav-link');

liActive.forEach((li) => {
  li.addEventListener('click', () => {
    const active = document.querySelector('.active');
    active.className = 'nav-link';
    li.className = 'nav-link active';
  });
});
