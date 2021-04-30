console.log(document.querySelector("#pai").lastElementChild )
document.querySelector("#elementoOndeVoceEsta").parentNode.style.backgroundColor='blue'
document.getElementById("primeiroFilhoDoFilho").innerText='bbbbbbbbbbbbbbbbbbbbbbbb'
console.log(document.querySelector("#pai").firstElementChild )
document.querySelector("#elementoOndeVoceEsta").previousElementSibling 
document.querySelector("#elementoOndeVoceEsta").nextSibling 
document.querySelector("#elementoOndeVoceEsta").nextElementSibling
document.querySelector("#pai").children[2] 
let filhoDoPai=document.createElement('div')
document.getElementById("pai").appendChild(filhoDoPai)
filhoDoPai.id='fdp'
let meuFilho=document.createElement('div')
document.getElementById("elementoOndeVoceEsta").appendChild(meuFilho)
let filhodofilho=document.createElement('div')
filhodofilho.id='fdf'
console.log(document.getElementById("primeiroFilhoDoFilho").appendChild(filhodofilho))
console.log(document.querySelector("#fdf").parentNode.parentNode.parentNode.children[2])
