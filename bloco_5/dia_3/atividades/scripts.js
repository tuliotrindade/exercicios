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
  function criaDias(){
  for (let index = 0; index < dezDaysList.length; index += 1) {
        const days2 = dezDaysList[index];
        const dayListItem2 = document.createElement("li");
        dayListItem2.innerHTML = days2;
        weekDaysList2.appendChild(dayListItem2);
        dayListItem2.className = "day";
        if (dezDaysList[index] == 24 || dezDaysList[index] == 31) {
        dayListItem2.className = "holiday, day";
        } else if (
        dezDaysList[index] == 4 ||
        dezDaysList[index] == 11 ||
        dezDaysList[index] == 1
        ) {
        dayListItem2.className = "friday, day";
        } else if (dezDaysList[index] == 25) {
        dayListItem2.className = "friday, holiday, day";
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
  let aa=document.querySelectorAll(".friday")[0]
  console.log(aa)

  let mcferiado = document.querySelector("#btn-holiday");
  mcferiado.addEventListener("click", function(){
    document.querySelectorAll('.holiday')[0].style.background = 'rgb(152,255,152)';
    document.querySelectorAll('.holiday')[1].style.background = 'rgb(152,255,152)';
    document.querySelectorAll('.holiday')[2].style.background = 'rgb(152,255,152)';
  })




// Escreva seu código abaixo.
