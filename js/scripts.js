$('#menu-list a').click(function(){
  var sectionId = $(this).attr("href");
  console.log(sectionId);
  $("html, body").animate({
        scrollTop: $(sectionId).offset().top
    }, "slow");
    console.log("test");
  return false;
});

const navButton = document.querySelector('button[aria-expanded]');
function toggleNav({target}) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);


const works = document.querySelectorAll('.work');
const opinions = document.querySelectorAll('.opinions');

function setActive() {
  this.classList.add('active');
}

function unsetActive() {
  this.classList.remove('active');
  this.classList.remove('visible');
}

function showProjektName() {
  if( this.classList.contains('active')){
    this.classList.add('visible');
  }
}

const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal-photo');

function openPhoto(e) {
  console.log(modal);
  const src = e.currentTarget.querySelector('img').src;
  console.log(modalImage);
  modalImage.src = src;
  modal.classList.add('open');
}

function closePhoto(e) {
  console.log(e.target.closest('.modal-photo'));
  if(!e.target.closest('.modal-photo')){
    modal.classList.remove('open');
  }
}

works.forEach(work => work.addEventListener('mouseover', setActive));
works.forEach(work => work.addEventListener('mouseout', unsetActive));
works.forEach(work => work.addEventListener('transitionend', showProjektName));
works.forEach(work => work.addEventListener('click', openPhoto));
modal.addEventListener('click', closePhoto);


const bullets = document.querySelectorAll('.bullet');
const slides = document.querySelectorAll('.opinion');
const photos = document.querySelectorAll('.stack');

function changeSlide(e) {
  const slideNumber = e.target.getAttribute('data-target');
  const slide = document.querySelector(`[data-target=${CSS.escape(slideNumber)}]`);
  const photo = document.querySelector(`[data-photo=${CSS.escape(slideNumber)}]`);
  console.log(e.target);
  slides.forEach(slide => slide.classList.remove('current-opinion'));
  photos.forEach(photo => photo.classList.remove('current-opinion'));
  bullets.forEach(bullet => bullet.classList.remove('current-opinion'));
  slide.classList.add('current-opinion');
  photo.classList.add('current-opinion');
  e.target.classList.add('current-opinion');
}

bullets.forEach(bullet => bullet.addEventListener('click', changeSlide))
