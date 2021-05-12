const estados=["acre","alagoas","amapa","amazonas","bahia","ceara","espirito santo","goias","maranhão","mato grosso","mato grosso do sul", "minas gerais", "para", "paraiba", "parana", "pernambuco", "piaui", "rio de janeiro","rio grande do norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
let estado=document.getElementById("estados");
function adicionaestado(){
for (let i=0;i<estados.length;i+=1){
    let conteudoEstados=document.createElement("option")
    conteudoEstados.textContent=estados[i];
    estado.appendChild(conteudoEstados);
}
}
adicionaestado();