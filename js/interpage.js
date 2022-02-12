const humber = document.querySelector('.menu_bar');
const menu = document.querySelector('.Lnav ul');
const nav = document.querySelector('.Lnav');

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
let count = 5;
const Lks = document.links;
const page = document.URL;

for (let i = 6; i < 11; i += 1) {
  if (Lks[i].href === page) {
    count = i;
  }
}

if (document.body.clientWidth > 800) {
  document.links[count].style.color = '#ec5242';
  document.links[count].style.fontWeight = '900';
}
//   Fixed header on scroll
const header = document.querySelector('.white_bar');
const posit = header.offsetTop;
window.onscroll = () => {
  if (window.pageYOffset > posit) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};