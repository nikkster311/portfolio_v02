const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})


// display submit confirmation on submit
var contactSumbit = document.querySelectorAll(".contact-submit")
contactSumbit.forEach(function(btn){
  btn.onclick = function(){
    var verifySubmit = document.getElementsByClassName('verify-submit');

    document.getElementById(verifySubmit).style.display = 'block';
  }
})


// modal

var modalBtns = document.querySelectorAll('.portfolio__item')
modalBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = 'block';
  };
});
//this sets display on onclick

var closeBtns = document.querySelectorAll('.close');

closeBtns.forEach(function(btn){
  btn.onclick = function(){
    var modal = btn.closest('.modal').style.display = 'none';
  }
});

window.onclick = function(e){
  if(e.target.className == "modal") {
    e.target.style.display = "none";
  }
}

// // Get the modal
// var modal = document.getElementById("myModal");
//
// // Get the button that opens the modal
// var btn = document.getElementById("portfolioModalBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
