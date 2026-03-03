 
 
const rodape = document.getElementById("rodape")

//rodape.style.color = "red"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent =  "um novo Titulo "
// console.log(novotitulo)
rodape.appendChild(novoTitulo)
const hearder = document.getElementById("exenplo")
hearder.appendChild(novoTitulo)

hearder.addEventListener("click", () => {
    alert("batatas")
})
