const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage=()=>{
    dragon.damage=(Math.round(Math.random()*15))+50;
    return dragon.damage
};
const warriorDamage=()=>{
    warrior.damage=(Math.round(Math.random()*30))+30;
    return warrior.damage;
};
const mageDamageMana=()=>{
    let saidaMago={};
    if(mage.mana>=15){
        mage.mana-=15
        mage.damage=(Math.round(Math.random()*45))+45;
        saidaMago.damage=mage.damage;
        saidaMago.manaGasta=15;
        return saidaMago;
    }
    else{
        mage.damage=0;
        saidaMago.damage=mage.damage;
        saidaMago.manaGasta=0;
        return saidaMago;
    }
};
