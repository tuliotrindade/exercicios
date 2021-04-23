let a="UGAdasdadsa";
switch(a.toLowerCase()){
    case "peão":
    console.log("uma casa a frente ou uma na diagonal para atacar");
    break;

    case "bispo":
    console.log("diagonais");
    break;

    case "torre":
    console.log("horizontais ou verticais");
    break;

    case "cavalo":
    console.log("uma casa a frente ou uma na diagonal para atacar");
    break;

    case "rei":
    console.log("uma casa em qualquer direção");
    break;

    case "rainha":
    console.log("N casas para qualquer direção");
    break;

    default:
    console.log("erro")
}
