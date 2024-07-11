let SHSpopup = document.getElementById('SHSpopup');
let COSpopup = document.getElementById('COSpopup');
let AGpopup = document.getElementById('AGpopup');

// Safer Home Services
function openSHSPopup(){
  SHSpopup.classList.add('open-popup');
  console.log('open pop up');
}
function closeSHSPopup(){
  SHSpopup.classList.remove('open-popup')
}

// Cosmos
function openCOSPopup(){
  COSpopup.classList.add('open-popup');
  console.log('open pop up');
}
function closeCOSPopup(){
  COSpopup.classList.remove('open-popup')
}

// Agenda 
function openAGPopup(){
  AGpopup.classList.add('open-popup');
  console.log('open pop up');
}
function closeAGPopup(){
  AGpopup.classList.remove('open-popup')
}