const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const att= (lesson2)=>{
    lesson2["turno"]='manhã'
}
att(lesson2);

const verificaKeys=(x)=>{
    return Object.keys(x)
}
verificaKeys(lesson3)

const verificaTamanho =(x)=>{
    return Object.keys(x).length
}
verificaTamanho(lesson3)

const verificaValores =(x)=>{
    return Object.values(x);
}
verificaValores(lesson3)

let allLessons= {}
allLessons["lesson1"]=lesson1
allLessons["lesson2"]=lesson2
allLessons["lesson3"]=lesson3

const numeroEstudantes=()=>{
    let somatorio=0;
    somatorio=allLessons.lesson1.numeroEstudantes+allLessons.lesson2.numeroEstudantes+allLessons.lesson3.numeroEstudantes
    return somatorio;
}

numeroEstudantes()

const valores=(x,y)=>{
    return Object.values(x)[y]
}

const keyValue=(x,y,z)=>{
    if(Object.keys(x).includes(y) === Object.values(x).includes(z)){
        return true;
    }
    else {
        return false
    }
}
console.log(keyValue(lesson3, 'turno', 'noite'))