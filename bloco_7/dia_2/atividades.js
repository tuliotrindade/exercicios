const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let frase="";
  frase=`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${Object.values(order)[0]},
  telefone: ${Object.values(order)[1]}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`
  return frase
}


const orderModifier = (order) => {
  let saida="";
  saida=`Olá ${Object.values(order)[0]="Luiz silva"} o total do seu pedido de ${order.order.pizza[1]="mussarela"} `
  console.log(Object.keys(order.order.pizza.1))
  return saida;
}

console.log(orderModifier(order));