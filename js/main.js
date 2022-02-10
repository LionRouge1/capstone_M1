const humber = document.querySelector('.menu_bar');
const menu = document.querySelector('nav ul');
const nav = document.querySelector('nav');

humber.addEventListener('click', () => {
 if(menu.style.display == 'grid'){
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

const speaker = [
 {
  'name' : 'Mousa YAYA',
  'title' : 'CEO and Founder of global school',
  'image' : 'images/speaker1.png',
  'biblio' : 'Created Global school in 2012 to bring all the student together across the world widthout discrimination'
 },
 {
  'name' : 'Richard YONON',
  'title' : 'Professor of sociology at Harvard University',
  'image' : 'images/speaker2.png',
  'biblio' : 'Richard is a great sociologue, he published his seminal book "Nature and Human geing" in 1995'
 },
 {
  'name' : 'Toyi Manha',
  'title' : 'Ministre of youth in Ghana',
  'image' : 'images/speaker3.png',
  'biblio' : 'Toyi works for potential changes and hope for the youth in the wholeword specialy in africa'
 },
 {
  'name' : 'Julia LEDA',
  'title' : 'Professor of sociology at Harvard University',
  'image' : 'images/speaker4.png',
  'biblio' : 'Julia is a great sociologue, he published his seminal book "Nature and Human geing" in 1995'
 },
 {
  'name' : 'Mousa YAYA',
  'title' : 'CEO and Founder of global school',
  'image' : 'images/speaker5.png',
  'biblio' : 'Created Global school in 2012 to bring all the student together across the world widthout discrimination'
 },
 {
  'name' : 'Richard YONON',
  'title' : 'Professor of sociology at Harvard University',
  'image' : 'images/speaker6.png',
  'biblio' : 'Richard is a great sociologue, he published his seminal book "Nature and Human geing" in 1995'
 }
];
const containSpeaker = document.querySelector('.contain_speaker');
function ftnSpeaker(n) {
 const cardSpeaker = `
 <div class="speaker">
    <img src="${speaker[n].image}" alt="speaker's peature">
    <div>
     <h3 class="name">${speaker[n].name}</h3>
     <h4>${speaker[n].title}.</h4>
     <p>${speaker[n].biblio}</p>
    </div>
   </div>`;
 containSpeaker.insertAdjacentHTML('beforeend', cardSpeaker);
 
}

if (document.body.clientWidth <= 800) {
 for(let i = 0; i <= 1; i++){
  ftnSpeaker(i);
 }
}else {
 for(let i = 0; i < speaker.length; i++){
  ftnSpeaker(i);
 }
};

//button more 
const button = document.getElementById('more');
const Mber = document.querySelectorAll('.speaker');

button.addEventListener('click', () => {
 console.log(Mber.length);
 if(Mber.length <= 2){
  for(let i = 2; i < speaker.length; i++){
   ftnSpeaker(i);
  }
 }
 button.style.display = 'none';
})
