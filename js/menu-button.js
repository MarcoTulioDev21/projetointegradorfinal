// Criando funcionalidade ao pressionar o botão menu
const navbar = document.querySelector(".navbar")
const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", () =>{
  navbar.classList.toggle("show-menu") // Remove ou não se tiver o show-menu
}) 