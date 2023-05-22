let toggleBtn = document.querySelector(".toggleBtn");
let container = document.querySelector(".container");

// "toggle" method is used to switch to an state where the active class is enabled
toggleBtn.onclick = function(){
    container.classList.toggle("active")
}