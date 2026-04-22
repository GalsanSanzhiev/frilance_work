const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav_links_container');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});