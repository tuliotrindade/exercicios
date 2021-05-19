const fatorial= (n) =>  {const fatorial2 = n<=1 ? 1 : n*fatorial(n-1);return fatorial2;}

const longestWord = (n) => {
    let palavraSeparada=n.split(" ");
    let compara=" ";
    for (let i of palavraSeparada){
        if(i.length >compara.length){
            compara=i
        }
    }
    return compara;

    }
console.log(longestWord("Antônio foi no banheiro e não sabemoooooooos o que aconteceuuuuuuuuuuuuuuuuu"))
