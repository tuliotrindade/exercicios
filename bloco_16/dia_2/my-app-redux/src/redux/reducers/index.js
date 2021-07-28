
const INITIAL_STATE = {
  login: {
    email:'',
    senha:'',
  },
  cadastro: {
    nome:'',
    email:'',
    senha:''
  }
};

function Reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ('ADD_LOGIN'):
      return {...state, login: action.value}
    case ('ADD_CADASTRO'):
      return {...state, cadastro: action.value}
    default:
      return state;
  }
}



export default Reducer;
