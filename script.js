const paragrafo = document.querySelector("#paragrafo");
const botao = document.querySelector("#botao");
const imagem = document.querySelector("#img")
const img1 = "https://th.bing.com/th/id/OIP.fSqdvFokgnZU6S6Qu2g6RwHaH3?w=154&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
const img2 = "https://th.bing.com/th/id/OIP.AZIiSnn_FbUjpXBHM4U-pQHaKs?w=121&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
let texto = paragrafo.innerHTML
botao.addEventListener("click", () => {  
    paragrafo.innerHTML = "Você matou o sahur! 😥"
    imagem.src = img2
})
//innerHTML é o espaço entra a tag de abertura e a de fechamento 
//<p>innerHTML<p>

