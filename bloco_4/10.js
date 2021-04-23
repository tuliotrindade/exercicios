let preço=500;
let venda=-9;
let lucro;

if(preço<0 || venda<0){
    console.log("erro");
}
else{
    console.log(lucro=(venda-preço*1.2)*1000);
}

