let button = document.querySelector(".reverse");
let contact_icons = document.querySelectorAll(".contact")
button.addEventListener("click",function(e){
    button.classList.add('animate__animated', 'animate__fadeOutDown');
},false);

button.addEventListener('animationend', () => {
    button.style.display = 'none';
    contact_icons.forEach(element => element.style.display = 'inline-block');
    contact_icons.forEach(element => element.classList.add('animate__animated', 'animate__fadeInUp'));
  });