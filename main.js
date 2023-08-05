const information = document.querySelector('div.information');
information.innerHTML = window.innerHeight;
const mainH = document.querySelector('div.main-back').offsetHeight;
const buttonH = document.querySelector('div.button-area').offsetHeight;
information.style.height
= (window.innerHeight - mainH - buttonH) + 'px';