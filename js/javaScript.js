const body = document.getElementById("body")
const botao = document.getElementById("botao")
const menuIcon = document.getElementById("menu-icon")
const menu = document.querySelector("nav > ul")

const voltar = document.getElementById("voltar")
const avançar = document.getElementById("avançar")
const projetos = document.querySelectorAll("#projetos > div > div")

const skills = document.getElementById('skills');

skills.addEventListener('click', (event) => {
    const card = event.target.closest(".card");
    card.classList.toggle("is-flipped")
});


botao.addEventListener("click", () => {
    body.classList.toggle("dark")
})

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu-oculto")
})

//imagens dos projetos

let cont = 0

voltar.addEventListener("click", () => {
    

    projetos[cont].classList.toggle("oculto")

    if(cont == 0){
        cont = 2
    }else{
        cont--
    }

    if(!projetos[cont].classList.contains("scale-in-hor-left")){
        projetos[cont].classList.toggle("scale-in-hor-left")
    }
    if(projetos[cont].classList.contains("scale-in-hor-right")){
        projetos[cont].classList.toggle("scale-in-hor-right")
    }
   
  
    projetos[cont].classList.toggle("oculto")
})



avançar.addEventListener("click", () => {

   projetos[cont].classList.toggle("oculto")
   if(cont == 2){
        cont = 0
   }else{
        cont++
   }

    if(!projetos[cont].classList.contains("scale-in-hor-right")){
        projetos[cont].classList.toggle("scale-in-hor-right")
    }
     if(projetos[cont].classList.contains("scale-in-hor-left")){
        projetos[cont].classList.toggle("scale-in-hor-left")
    }

    
   projetos[cont].classList.toggle("oculto")
})