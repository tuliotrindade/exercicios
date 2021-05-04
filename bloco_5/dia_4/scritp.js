
let botoes = document.createElement("div");
document.querySelector("body").appendChild(botoes);
botoes.className="botoes"

let texto = document.createElement("div");
document.querySelector("body").appendChild(texto);
texto.innerText =
  "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
texto.className="textos"

let bMudaFundo = document.createElement("button");
document.querySelector(".botoes").appendChild(bMudaFundo);
bMudaFundo.className = "muda-fundo";
bMudaFundo.innerText = "muda cor de fundo";
let c=0;
bMudaFundo.addEventListener("click",function(){
    if(c===0){
        texto.style.background="red";
        c+=1;
    }
    else{
        texto.style.background="white";
        c=0;
    }
    
})
let descricao1=document.createElement("h2");
document.querySelector(".botoes").appendChild(descricao1);
descricao1.className="descricao1"
descricao1.innerText="digite uma cor para o texto"
let bMudaCorTexto = document.createElement("input");
document.querySelector(".descricao1").appendChild(bMudaCorTexto);
bMudaCorTexto.className = "mudacortexto";
document.querySelector(".textos").style.color=bMudaCorTexto.value;
console.log(bMudaCorTexto)

let bMudaTamanhoFonte = document.createElement("button");
document.querySelector(".botoes").appendChild(bMudaTamanhoFonte);
bMudaTamanhoFonte.className = "muda-fundo";
bMudaTamanhoFonte.innerText = "tamanho da fonte";

let bMudaEspacamento = document.createElement("button");
document.querySelector(".botoes").appendChild(bMudaEspacamento);
bMudaEspacamento.className = "muda-fundo";
bMudaEspacamento.innerText = "muda espaçamento";

let bMudaFamilia = document.createElement("button");
document.querySelector(".botoes").appendChild(bMudaFamilia);
bMudaFamilia.className = "muda-fundo";
bMudaFamilia.innerText = "muda font family";
