/*let player={
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestintheworld:[2006, 2007, 2008, 2009, 2010, 2018]
}
console.log('a jogadora '+player.name+' '+player.lastName+' tem '+player.age+' anos de idade');
console.log('A jogadora Marta Silva foi eleita a melhor do mundo por '+player.bestintheworld.length+' vezes')
*/
/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
}
for(let key in names){
    console.log('olá '+names[key]);
}
*/
let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}
for (let key in carro){
    console.log(key+':'+' '+carro[key])
}