const random=()=>{
return Math.round(Math.random()*5);
};
console.log(random());
const valida=(numero, random)=>(numero===random())? "Parabéns você ganhou": "Tente novamente";
console.log(valida(5,random));