const registro=(name, email)=>{
    let perfil={
        name,
        email,
    };
    return perfil;
};

const newEmployees = () => {
  const employees = {
    id1:`${Object.keys(registro('pedro guerra', 'aaaaaaaaaa'))[0]}: ${Object.values(registro('pedro guerra', 'aaaaaaaaaa'))[0]}`   ,
    id2:`${Object.keys(registro('Luiza Drumond', 'aaaaaaaaaa'))[0]}: ${Object.values(registro('Luiza Drumond', 'aaaaaaaaaa'))[0]}`, 
    id3:`${Object.keys(registro('Carla Paiva', 'aaaaaaaaaa'))[0]}: ${Object.values(registro('Carla Paiva', 'aaaaaaaaaa'))[0]}`,
  }
  return employees;
};
console.log(newEmployees())