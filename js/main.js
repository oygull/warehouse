window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("header").classList.add('show-header');
  } else {
    document.getElementById("header").classList.remove('show-header');
  }
}

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
var settings = document.getElementById('settings');
var modalSettings = document.getElementById('modalSettings');
var closeNav = document.getElementById('closeNav');
var modalNav = document.getElementById('modalNav');
var modalNavBox = document.getElementById('modalNavBox');
var menuBtn = document.getElementById('menuBtn');
var scrollSidebar = document.getElementById('scrollSidebar');

settings.addEventListener('click', function(){
  modalSettings.classList.toggle('show-settings')
});

menuBtn.addEventListener('click', function(){
  document.body.classList.add('canvasmenu-right');
  modalNav.classList.add('show-nav');
  modalNavBox.classList.add('show-navbox');
});

closeNav.addEventListener('click', function(){
  document.body.classList.remove('canvasmenu-right');
  modalNav.classList.remove('show-nav');
  modalNavBox.classList.remove('show-navbox');
});


myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});



