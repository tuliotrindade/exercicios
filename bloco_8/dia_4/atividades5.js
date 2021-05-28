const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    const cont=((contador, nome)=>{
    nome=nome.toUpperCase();
    let nomeSeparado= nome.split('')
    nomeSeparado.forEach((Element)=>(Element=="A")? contador+=1:contador=contador)
    return contador;
  })
  return names.reduce(cont,0)
}

assert.deepStrictEqual(containsA(), 20);