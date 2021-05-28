const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const saida=grades.map((grade)=>{
    return (grade.reduce((acumulador,resultados)=>acumulador+=resultados)/grade.length)
  })
  const alunos = (listaAlunos, notas) => listaAlunos.map((students, index) => (
  { name: students,average: notas[index] }
));
    const listaAlunos = alunos(students, saida);
    return listaAlunos;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);