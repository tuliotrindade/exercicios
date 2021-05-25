const verifica=(gabarito,respostas)=>{
    let acertos=0;
    for(let i in gabarito){
        if(gabarito[i]===respostas[i]){
            acertos+=1;
        }
        else if(respostas[i]=='N.A'){
            acertos=acertos;
        }
        else if(gabarito[i]!=respostas[i]){
            acertos-=0.5;
        }
    }
    return acertos;
}

const compara=(gabarito, respostas, verifica)=>{
    return verifica(gabarito,respostas);
};

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(compara(rightAnswers,studentAnswers,verifica))