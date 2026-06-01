const body = document.getElementById("body")
const botao = document.getElementById("botao")
const menuIcon = document.getElementById("menu-icon")
const menu = document.querySelector("nav > ul")

botao.addEventListener("click", () => {
    body.classList.toggle("dark")
})

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu-oculto")
})