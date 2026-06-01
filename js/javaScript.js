const body = document.getElementById("body")
const botao = document.getElementById("botao")

botao.addEventListener("click", () => {
    body.classList.toggle("dark")
})