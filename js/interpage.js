const humber = document.querySelector('.menu_bar');
const menu = document.querySelector('nav ul');
const nav = document.querySelector('nav');

humber.addEventListener('click', () => {
  if (menu.style.display === 'grid') {
    nav.style.width = '50px';
    menu.style.display = 'none';
    menu.style.height = '0px';
    humber.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    nav.style.width = '100%';
    menu.style.display = 'grid';
    menu.style.height = '424px';
    humber.innerHTML = '<i class="fas fa-times-circle"></i>';
  }
});

// active page
let count = 0;
const Lks = document.links;
const page = document.URL;

for (let i =1; i < 6; i ++) {
  if (Lks[i].href === page) {
    count = i;
  }
}

document.links[count].className = 'active';