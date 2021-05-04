const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }

  const weekDaysList2 = document.querySelector("#days");
  function criaDias() {
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const days2 = dezDaysList[index];
      const dayListItem2 = document.createElement("li");
      dayListItem2.innerHTML = days2;
      weekDaysList2.appendChild(dayListItem2);
      dayListItem2.className = "day";
      if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
        dayListItem2.className = "holiday day";
      } else if (
        dezDaysList[index] == 4 ||
        dezDaysList[index] == 11 ||
        dezDaysList[index] == 18
      ) {
        dayListItem2.className = "friday day";
      } else if (dezDaysList[index] == 25) {
        dayListItem2.className = "friday holiday day";
      } else {
        dayListItem2.className = "day";
      }
    }
  }
  criaDias();
}
createDaysOfTheWeek();

let botao = document.querySelector(".buttons-container");
function criaBotao(feriados) {
  var botao2 = document.createElement("BUTTON");
  var escrita = document.createTextNode("feriados");
  botao2.appendChild(escrita);
  botao.appendChild(botao2);
  botao2.id = "btn-holiday";
}
criaBotao();
let c = 0;
let mcferiado = document.querySelector("#btn-holiday");
mcferiado.addEventListener("click", function () {
  if (c == 0) {
    document.querySelectorAll(".holiday")[0].style.background = "red";
    document.querySelectorAll(".holiday")[1].style.background = "red";
    document.querySelectorAll(".holiday")[2].style.background = "red";
    c += 1;
  } else {
    document.querySelectorAll(".holiday")[0].style.background =
      "rgb(238,238,238)";
    document.querySelectorAll(".holiday")[1].style.background =
      "rgb(238,238,238)";
    document.querySelectorAll(".holiday")[2].style.background =
      "rgb(238,238,238)";
    c = 0;
  }
});
let botaoSF = document.querySelector(".buttons-container");
function criaBotaoSF(feriados) {
  var botaoSF2 = document.createElement("BUTTON");
  var escrita = document.createTextNode("Sexta-Feira");
  botaoSF2.appendChild(escrita);
  botaoSF.appendChild(botaoSF2);
  botaoSF2.id = "btn-friday";
}
criaBotaoSF();
let i = 0;
let mTSF = document.querySelector("#btn-friday");
mTSF.addEventListener("click", function (evento) {
  if (i == 0) {
    document.querySelectorAll(".friday")[0].innerText = "malow";
    document.querySelectorAll(".friday")[1].innerText = "malow";
    document.querySelectorAll(".friday")[2].innerText = "malow";
    document.querySelectorAll(".friday")[3].innerText = "malow";
    i += 1;
  } else {
    document.querySelectorAll(".friday")[0].innerText = "4";
    document.querySelectorAll(".friday")[1].innerText = "11";
    document.querySelectorAll(".friday")[2].innerText = "18";
    document.querySelectorAll(".friday")[3].innerText = "25";
    i = 0;
  }
});
function dayMouseOver() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function dayMouseOut() {
  let days = document.querySelector("#days");
  days.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
  });
}

dayMouseOver();
dayMouseOut();

function tarefa(string){
  let minhaTarefa=document.querySelector(".my-tasks");
  let criaTarefa=document.createElement("span");
  criaTarefa.innerHTML=string;
  minhaTarefa.appendChild(criaTarefa);
}
tarefa("tarefa: ")

function legenda(cor){
  let minhaLegenda=document.querySelector(".my-tasks");
  let criaLegenda=document.createElement("div");

  criaLegenda.className="task"
  criaLegenda.style.background=cor;
  minhaLegenda.appendChild(criaLegenda);
}
legenda("rgb(50, 50, 50)")


let clickClass=document.querySelector(".task");
let cont=0;
clickClass.addEventListener("click",function(){
  if(cont==0){
    clickClass.className="task-Selected";
    cont+=1;
  }
  else{
    clickClass.className="task"
    cont=0;
  }
})

function mudaCorDia() {
  let days = document.querySelector("#days");
  days.addEventListener("click", function (event) {
    if(event.target.style.color=="black"){
    event.target.style.color="red"
    }
    else{
      event.target.style.color="black";
    }
  });
}
mudaCorDia();


// Escreva seu código abaixo.
