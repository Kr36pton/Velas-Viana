const togglebutton = document.getElementsByClassName('toggle_button')[0]
const navbarnav = document.getElementsByClassName('navbar_nav')[0]

togglebutton.addEventListener('click', () => {
    navbarnav.classList.toggle('active')
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
};
var acc = document.getElementsByClassName("accordion_formation");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
};