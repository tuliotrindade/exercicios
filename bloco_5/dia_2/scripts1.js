let h1=document.createElement('h1');
h1.innerText='Exercício 5.2 - JavaScript DOM';
document.querySelector("body").appendChild(h1);
let div=document.createElement('div');
document.querySelector("body").appendChild(div);
div.className='main-content';
let div2=document.createElement('div');
document.querySelector("div").appendChild(div2);
div2.className='center-content';
let p=document.createElement('p');
p.innerText='aaaaaaaaaaaaaaaaaaaaa';
document.querySelectorAll("div")[1].appendChild(p);
let div3=document.createElement('div');
document.querySelector("div").appendChild(div3);
div3.className='left-content';
let div4=document.createElement('div');
document.querySelector("div").appendChild(div4);
div4.className='right-content';
let img=document.createElement('src');
img.src='https://picsum.photos/200';
img.className='small-image'
document.querySelector('div').children[1].appendChild(img);




let lista=document.createElement('ul');
let array=['um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez']
for(let i=0;i<array.length;i+=1){
    let elemento=array[i];
    let criaLi=document.createElement('li');
    criaLi.innerText=elemento;
    lista.appendChild(criaLi);
}
document.querySelector('.right-content').appendChild(lista)

let h31=document.createElement('h3');
document.querySelector(".main-content").appendChild(h31);
let h32=document.createElement('h3');
document.querySelector(".main-content").appendChild(h32);
let h33=document.createElement('h3');
document.querySelector(".main-content").appendChild(h33);







