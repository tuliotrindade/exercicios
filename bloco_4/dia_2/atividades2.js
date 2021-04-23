let conjunto=[];
let conjunto2=[];
for(let i=1;conjunto.length<25;i+=1){
    conjunto.push(i);
}
//console.log(conjunto);
for(let i=0;i<conjunto.length;i+=1){
    conjunto2.push(conjunto[i]/2);
}
console.log(conjunto2);