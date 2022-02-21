var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');
var settings = document.getElementById('settings');
var modalSettings = document.getElementById('modalSettings');
var closeNav = document.getElementById('closeNav');
var modalNav = document.getElementById('modalNav');
var modalNavBox = document.getElementById('modalNavBox');
var menuBtn = document.getElementById('menuBtn');

settings.addEventListener('click', function(){
  modalSettings.classList.toggle('show-settings')
});

menuBtn.addEventListener('click', function(){
  modalNav.classList.add('show-nav');
  modalNavBox.classList.add('show-navbox');
});

closeNav.addEventListener('click', function(){
  modalNav.classList.remove('show-nav');
  modalNavBox.classList.remove('show-navbox');
});


myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});



