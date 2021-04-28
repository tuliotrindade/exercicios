/*
q1
let str='ola'
let estado;
function atv1(string){
    let string2 = str.split("").reverse().join("");
    if(str==string2){
        estado=true;
        return estado;
    }
    else{
        estado=false;
        return estado;
    }
}
console.log(atv1());
*/
/*
let numeros=[2, 3, 6, 7, 10, 1];
function main(numeros){
    let comparador=numeros[0];
    for(let i=0;i<numeros.length;i+=1){
        if(comparador<=numeros[i]){
            comparador=numeros[i];
        }
        else{
            comparador=comparador;
        }
    }
    return comparador;
}
console.log(main(numeros));
*/

/*
let numeros=[2, 4, 6, 7, 10, 0, -3];
function main(numeros){
    let comparador=numeros[0];
    for(let i=0;i<numeros.length;i+=1){
        if(comparador>=numeros[i]){
            comparador=numeros[i];
        }
        else{
            comparador=comparador;
        }
    }
    return comparador;
}
console.log(main(numeros));
*/
/*
let arr=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function main(arr){
    let comparador=arr[0];
    for(let i=0;i<arr.length;i+=1){
        if(comparador.length<=arr[i].length){
            comparador=arr[i];
        }
        else{
            comparador=comparador;
        }
    }
    return comparador;
}
console.log(main(arr));
*/
/*
function numeroRepete(numeros) {
  let contNumero = 0;
  let contRepeticao = 0;
  let num = 0;
  let indice = 0;
  for (let index in numeros) {
    num = numeros[index];
    for (index2 in numeros) {
      if (num === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepeticao) {
      contRepeticao = contNumero;
      indice = index;
    }
    contNumero = 0;
  }
  return numeros[indice];
}
console.log(numeroRepete([2, 3, 2, 5, 8, 2, 3, 3, 3]));
*/
/*
function main(n){
    let soma=0;
    let result;
    for(let i=0;i<=n;i+=1){
        soma+=i;
    }
    return soma;
}
console.log(main(5))
*/
/*
function main(word, ending){
    let resultado;
    palavra= word.split("").reverse().join("")
    final= ending.split("").reverse().join("")
    separa= palavra.slice(0, final.length)
    if(final==separa){
        resultado=true;
    }
    else{
        resultado=false; 
    }
    return resultado;
}
console.log(main('joaofernando','fernan'))
*/
let entrada='';
let cod={
 IV:4,    
 V:5,    
 IX:9,    
 X:10,   
 XL:40,   
 L:50,   
 XC:90,   
 C:100,  
 CD:400,  
 D:500,  
 CM:900,  
 M:1000, 
}
