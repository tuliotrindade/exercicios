let bruto=2600;
let liquido;
let base;
let inss;
let ir;
let parcela;

if(bruto<=1556.94){
    inss=0.08;
    console.log(liquido=bruto-(bruto*inss));
}
else if (1556.94<bruto && bruto<=1903.98){
    inss=0.09;
    console.log(liquido=bruto-(bruto*inss));
}
else if (1903.99 <=bruto && bruto<=2594.92){
    inss=0.09;
    base=bruto-(bruto*inss);
    ir=base*0.075-142.8;
    liquido=base-ir;
    console.log(liquido);
}
else if (2594.92 <bruto && bruto<=2826.65){
    inss=0.11;
    base=bruto-(bruto*inss);
    ir=base*0.075-142.8;
    liquido=base-ir;
    console.log(liquido);
}
else if (2826.65 <bruto && bruto<=3751.05){
    inss=0.11;
    base=bruto-(bruto*inss);
    ir=base*0.15-354.8;
    liquido=base-ir;
    console.log(liquido);
}
else if (3751.05 <=bruto && bruto<=4664.68){
    inss=0.11;
    base=bruto-(bruto*inss);
    ir=base*0.225-636.13;
    liquido=base-ir;
    console.log(liquido);
}
else if (4664.68 <=bruto && bruto<=5189.2){
    inss=0.11;
    base=bruto-(bruto*inss);
    ir=base*0.275-869.36;
    liquido=base-ir;
    console.log(liquido);
}
else if (5189.82 <=bruto){
    inss=570.88;
    base=bruto-inss;
    ir=base*0.275-869.36;
    liquido=base-ir;
    console.log(liquido);
}




