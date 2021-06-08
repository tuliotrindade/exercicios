const promise = new Promise((resolve, reject) => {
  const arr=[];
  let saida=[];
  let soma=0;
  for(let i=0;i<10;i+=1){
    const number = Math.floor(Math.random() * 50);
    arr.push(number*number);
  }
  arr.forEach((elemento)=>{
    soma+=elemento
  })
  if(soma<8000){
      let divisores=[2,3,5,10]
      divisores.forEach((elemento)=>{
          saida.push(soma/elemento)
      })
      return resolve(saida)
  }
  reject()
})
.then((resultado)=>console.log(resultado))
.catch(()=>console.log("É mais de oito mil! Essa promise deve estar quebrada!"))

