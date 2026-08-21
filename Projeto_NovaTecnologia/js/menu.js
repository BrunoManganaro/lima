//Script para ativar o menu hambúrguer
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    //toggle é uma espécie de "liga e desliga" para a classe "show"
});